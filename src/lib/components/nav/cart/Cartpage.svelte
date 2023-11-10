<script>
  // @ts-nocheck

  import axios from "axios";
  import { io } from "socket.io-client";
  import { onMount, onDestroy } from "svelte";

  let tinyPesaUrl = "https://tinypesa.com/api/v1/express/initialize";

  let paymentInitiated = false;
  let loading = false;
  let succes = false;
  let failed = false;
  let request_id;

  onMount(() => {
    request_id = localStorage.getItem("request_id");
  });

  function completeOrder() {
    paymentInitiated = true;
    loading = true;
    succes = false;
    failed = false;

    axios
      .post(
        tinyPesaUrl,
        {
          amount: "1",
          msisdn: "0759175137",
          account_no: import.meta.env.VITE_TINYPESA_ACCOUT_NO,
        },
        {
          headers: {
            ApiKey: import.meta.env.VITE_TINYPESA_API_KEY,
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((res) => {
        // console.log(res);
        localStorage.setItem("request_id", res.data.request_id);
        // request_id = res.data.request_id;
      })
      .catch((err) => {
        console.log(err);
      });

    // initiate a transaction using tinypesa
    const socket = io(import.meta.env.VITE_BASE_URL, {
      reconnection: true, // Enable reconnection
      reconnectionAttempts: 10, // Number of reconnection attempts
      reconnectionDelay: 1000, // Delay between reconnection attempts (in milliseconds)
    });
    socket.on("connect", () => {
      console.log("Connected to the server");
      resetConnectionTimeout(); // Start the connection timeout timer
    });

    const connectionTimeout = 60000; // 10 minutes (in milliseconds)
    let timeoutId;

    function handleConnectionTimeout() {
      // Perform actions when the connection times out
      // console.log("Connection timed out due to inactivity.");
      socket.disconnect(); // Close the connection
    }
    function resetConnectionTimeout() {
      clearTimeout(timeoutId); // Clear the previous timeout (if any)
      timeoutId = setTimeout(handleConnectionTimeout, connectionTimeout); // Set a new timeout
    }

    socket.on("connect", () => {
      console.log("Connected to the server");
      resetConnectionTimeout(); // Start the connection timeout timer
    });
    socket.on("completedTrasaction", (data) => {
      console.log(data);
      if (data.request_id === localStorage.getItem("request_id")) {
        // alert("Transaction Completed");
        loading = false;
        succes = true;
      }
      localStorage.clear();

      resetConnectionTimeout();
    });
    socket.on("failedTransaction", (data) => {
      console.log(data);
      if (data.request_id === localStorage.getItem("request_id")) {
        // alert("Transaction Failed");
        loading = false;
        failed = true;
      }
      localStorage.clear();

      resetConnectionTimeout();
    });

    socket.on("disconnect", (reason) => {
      // console.log(`Disconnected from the server. Reason: ${reason}`);
      clearTimeout(timeoutId); // Clear the timeout when the connection is closed
    });

    onDestroy(() => {
      if (socket) {
        socket.close();
      }
    });
  }

  function closeSucces() {
    paymentInitiated = false;
    succes = false;
  }
</script>

<div class="h-screen bg-gray-100 pt-20 w-full relative">
  <!-- state modals -->
  {#if paymentInitiated}
    <div class="w-full">
      <div
        class="w-full h-full min-h-screen absolute bg-slate-700 haopacity-30"
      />
      <!-- Waiting State -->
      <div class="state-div z-30 relative top-36 mx-auto">
        {#if loading}
          <div>
            <h3 class="text-gray-700 pt-8 text-lg font-semibold text-center">
              Stk push initiated to your phone.
            </h3>
            <img
              class="mx-auto pt-5"
              src="loadin.gif"
              width="55px"
              alt="Description of the GIF"
            />
            <h3 class="text-yellow-500 text-lg font-semibold text-center mt-5">
              Enter your pin.
            </h3>
          </div>
        {/if}
        {#if succes}
          <div>
            <h3 class="text-gray-700 pt-8 text-lg font-semibold text-center">
              Transaction Completed
            </h3>
            <img
              class="mx-auto pt-5"
              src="succes.gif"
              width="55px"
              alt="Description of the GIF"
            />
            <h3 class="text-green-500 text-lg font-semibold text-center my-5">
              Thank You
            </h3>
            <div class="flex justify-center">
              <button
                on:click|preventDefault={closeSucces}
                class="text-white bg-green-400 mx-auto px-8 py-3 rounded text-lg font-semibold text-center my-5"
              >
                Close
              </button>
            </div>
          </div>
        {/if}
        {#if failed}
          <div>
            <h3 class="text-gray-700 py-8 text-lg font-semibold text-center">
              Transaction Failed
            </h3>
            <img
              class="mx-auto pt-5"
              src="failed2.gif"
              width="55px"
              alt="Description of the GIF"
            />
            <div class="flex justify-center">
              <button
                on:click={completeOrder}
                class="text-white bg-red-400 mx-auto px-8 py-3 rounded text-lg font-semibold text-center my-5"
              >
                Try Again
              </button>
            </div>
          </div>
        {/if}
      </div>
      <!-- Succes State -->
    </div>
  {/if}

  <h1 class="mb-10 md:ml-96 ml-8 text-2xl font-bold">Cart Items</h1>
  <div
    class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0"
  >
    <div class="rounded-lg md:w-2/3">
      <div
        class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
      >
        <img
          src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="product-image"
          class="w-full rounded-lg sm:w-40"
        />
        <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
          <div class="mt-5 sm:mt-0">
            <h2 class="text-lg font-bold text-gray-900">Nike Air Max 2019</h2>
            <p class="mt-1 text-xs text-gray-700">36EU - 4US</p>
          </div>
          <div
            class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6"
          >
            <div class="flex items-center border-gray-100">
              <span
                class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
              >
                -
              </span>
              <input
                class="h-8 w-8 border bg-white text-center text-xs outline-none"
                type="number"
                value="2"
                min="1"
              />
              <span
                class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
              >
                +
              </span>
            </div>
            <div class="flex items-center space-x-4">
              <p class="text-sm">259.000 ₭</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div
        class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
      >
        <img
          src="https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1131&q=80"
          alt="product-image"
          class="w-full rounded-lg sm:w-40"
        />
        <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
          <div class="mt-5 sm:mt-0">
            <h2 class="text-lg font-bold text-gray-900">Nike Air Max 2019</h2>
            <p class="mt-1 text-xs text-gray-700">36EU - 4US</p>
          </div>
          <div
            class="mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6"
          >
            <div class="flex items-center border-gray-100">
              <span
                class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
              >
                -
              </span>
              <input
                class="h-8 w-8 border bg-white text-center text-xs outline-none"
                type="number"
                value="2"
                min="1"
              />
              <span
                class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
              >
                +
              </span>
            </div>
            <div class="flex items-center space-x-4">
              <p class="text-sm">259.000 ₭</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Sub total -->
    <div
      class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3"
    >
      <div class="mb-2 flex justify-between">
        <p class="text-gray-700">Subtotal</p>
        <p class="text-gray-700">$129.99</p>
      </div>
      <div class="flex justify-between">
        <p class="text-gray-700">Shipping</p>
        <p class="text-gray-700">$4.99</p>
      </div>
      <hr class="my-4" />
      <div class="flex justify-between">
        <p class="text-lg font-bold">Total</p>
        <div class="">
          <p class="mb-1 text-lg font-bold">$134.98 USD</p>
          <p class="text-sm text-gray-700">including VAT</p>
        </div>
      </div>
      <button
        on:click|preventDefault={completeOrder}
        class="mt-6 w-full rounded-md bg-black py-1.5 font-medium text-blue-50 hover:bg-blue-600"
        >Check out</button
      >
    </div>
  </div>
</div>

<style>
  /* @layer utilities {
    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  } */
  .state-div {
    width: 388px;
    height: 255px;
    background-color: white;
    border-radius: 5px;
  }
</style>
