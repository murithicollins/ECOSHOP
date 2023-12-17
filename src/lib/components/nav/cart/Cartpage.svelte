<script>
  // @ts-nocheck

  import axios from "axios";
  import { io } from "socket.io-client";
  import { onMount, onDestroy } from "svelte";
  import { cart, updateQuantity, calculateTotal } from "../../../../store/cart";
  import { redirect } from "@sveltejs/kit";
  import { goto } from "$app/navigation";
  import { toast } from "@zerodevx/svelte-toast";

  let tinyPesaUrl = "https://tinypesa.com/api/v1/express/initialize";
  let baseApiUrl = import.meta.env.VITE_BASE_URL;

  let paymentInitiated = false;
  let loading = false;
  let succes = false;
  let failed = false;
  let request_id;
  $: total = $calculateTotal;

  const token = sessionStorage.getItem("access_token");
  console.log(token);
  onMount(() => {
    request_id = localStorage.getItem("request_id");
  });

  // console.log(token);
  const user = JSON.parse(sessionStorage.getItem("user"));

  async function createOrder() {
    let itemsId = $cart.map((item) => item.item.id);

    // console.log(user);
    // console.log(token);
    if (token === null) goto("/Login");
    if ($cart.length < 1) {
      toast.push("You Have no items to purchase");
      goto("/Shop");
    }
    await fetch(`${baseApiUrl}/api/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        data: {
          user: user.id,
          items: itemsId,
          status: "COMPLETE",
          paymentStatus: "PAID",
          totalPrice: total + 1,
          moreDetails: $cart,
        },
      }),
    });
    // axios
    //   .post(`${baseApiUrl}/api/orders`, {
    //     order,
    //   })
    //   .then((res) => {
    //     console.log(res);
    //   });
  }

  function completeOrder() {
    if (token === null) {
      goto("/Login");
    } else {
      if ($cart.length < 1) {
        goto("/Shop");
        toast.push("You Have no items to purchase");
        return;
      } else {
        paymentInitiated = true;
        loading = true;
        succes = false;
        failed = false;

        axios
          .post(
            tinyPesaUrl,
            {
              amount: total + 1,
              msisdn: user.phone,
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
          // console.log("Connected to the server");
          resetConnectionTimeout(); // Start the connection timeout timer
        });
        socket.on("completedTrasaction", (data) => {
          // console.log(data);
          if (data.request_id === localStorage.getItem("request_id")) {
            // alert("Transaction Completed");
            loading = false;
            succes = true;
          }
          createOrder();
          localStorage.clear();
          goto("/Shop");
          cart.set([]);

          resetConnectionTimeout();
        });
        socket.on("failedTransaction", (data) => {
          // console.log(data);
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
    }
  }

  function closeSucces() {
    paymentInitiated = false;
    succes = false;
    goto("/Shop");
  }
</script>

<div class=" h-screen w-full relative">
  <!-- state modals -->
  {#if paymentInitiated}
    <div class="w-full">
      <div
        class="w-full h-full min-h-screen absolute bg-slate-700 opacity-30"
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
  <div class="mt-24 md:mt-0">
    <h1 class="mb-10 md:ml-96 ml-8 text-2xl font-bold">Cart Items</h1>
    <div
      class="mx-auto max-w-6xl justify-center px-6 md:flex md:space-x-6 xl:px-0"
    >
      <div class="rounded-lg md:w-2/3">
        {#each $cart as item (item.item.id)}
          <div
            class="justify-between mb-6 rounded-lg items-center bg-white p-6 shadow-md sm:flex sm:justify-start"
          >
            <img
              src={baseApiUrl +
                item.item.attributes.images.data?.[0].attributes?.url}
              alt="product-image"
              class="w-full rounded-lg sm:w-40"
            />
            <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
              <div class="mt-5 sm:mt-0">
                <h2 class=" font-bold w-72 text-gray-900">
                  {item.item.attributes.itemName}
                </h2>
              </div>
              <div class="mt-4 flex gap-8 flex-col justify-end items-end">
                <div class="flex items-center border-gray-100">
                  <span
                    on:click={updateQuantity(item.item.id, -1)}
                    class="cursor-pointer rounded-l bg-gray-100 py-1 px-3 duration-100 hover:bg-orange-400 hover:text-blue-50"
                  >
                    -
                  </span>
                  <input
                    class="h-8 w-8 border bg-white text-center outline-none"
                    bind:value={item.qty}
                    min="1"
                  />
                  <span
                    on:click={updateQuantity(item.item.id, 1)}
                    class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-orange-400 hover:text-blue-50"
                  >
                    +
                  </span>
                </div>
                <div class="flex items-center space-x-4">
                  <p class="text-sm font-semibold">
                    Price: {item.item.attributes.price * item.qty} Ksh
                  </p>
                </div>
                <div class="test-sm text-red-400 font-semibold">Remove</div>
              </div>
            </div>
          </div>
        {/each}

        <div />
      </div>
      <!-- Sub total -->
      <div
        class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3"
      >
        <div class="mb-2 flex justify-between">
          <p class="text-gray-700">Subtotal</p>
          <p class="text-gray-700">Ksh {total}</p>
        </div>
        <div class="flex justify-between">
          <p class="text-gray-700">Shipping</p>
          <p class="text-gray-700">Ksh 1</p>
        </div>
        <hr class="my-4" />
        <div class="flex justify-between">
          <p class="text-lg font-bold">Total</p>
          <div class="">
            <p class="mb-1 text-lg font-bold">Ksh {total + 1}</p>
            <p class="text-sm text-gray-700">including VAT</p>
          </div>
        </div>
        <button
          on:click|preventDefault={completeOrder}
          class="mt-6 w-full rounded-md bg-orange-400 py-1.5 font-medium text-blue-50 hover:bg-orange-500"
          >Check out</button
        >
      </div>
    </div>
  </div>

  <style>
    .state-div {
      width: 388px;
      height: 255px;
      background-color: white;
      border-radius: 5px;
    }
  </style>
</div>
