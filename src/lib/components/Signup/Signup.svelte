<script>
  import { toast } from "@zerodevx/svelte-toast";

  let firstname = "";
  let secondname = "";
  let email = "";
  let phone = "";
  let password = "";

  async function register() {
    if (email === "") {
      toast.push("email is required");
      //   alert("email is required");
    }
    if (password === "") {
      toast.push("password is required");
    }
    if (firstname === "") {
      toast.push("firstname is required");
    }
    if (phone === "") {
      toast.push("phone is required");
    }

    const API_BASE_URL = import.meta.env.VITE_BASE_URL; // Replace with your actual API base URL

    const response = await fetch(`${API_BASE_URL}/api/auth/local/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: firstname + " " + secondname,
        email: email,
        phone: phone,
        password: password,
      }),
    });

    if (response.ok) {
      const { jwt, user } = await response.json();

      sessionStorage.setItem("access_token", jwt);
      sessionStorage.setItem("user", user);
    }
  }
</script>

<div
  class="min-w-screen min-h-screen flex items-center justify-center px-5 py-5"
>
  <div
    class=" text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden"
    style="max-width:1000px"
  >
    <div class="md:flex w-full">
      <div class="hidden md:block w-1/2 py-10 px-10">
        <img src="/sign-up.png" alt="sign-up" />
      </div>
      <div class="w-full md:w-1/2 py-10 bg-orange-50 px-5 md:px-10">
        <div class="text-center mb-10">
          <h1 class="font-bold text-3xl text-gray-900">REGISTER</h1>
          <p>Enter your information to register</p>
        </div>
        <div>
          <div class="flex -mx-3">
            <div class="w-1/2 px-3 mb-5">
              <label for="" class="text-xs font-semibold px-1">First name</label
              >
              <div class="flex">
                <div
                  class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"
                >
                  <i class="mdi mdi-account-outline text-gray-400 text-lg" />
                </div>
                <input
                  bind:value={firstname}
                  type="text"
                  class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                  placeholder="John"
                />
              </div>
            </div>
            <div class="w-1/2 px-3 mb-5">
              <label for="" class="text-xs font-semibold px-1">Last name</label>
              <div class="flex">
                <div
                  class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"
                >
                  <i class="mdi mdi-account-outline text-gray-400 text-lg" />
                </div>
                <input
                  bind:value={secondname}
                  type="text"
                  class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                  placeholder="Smith"
                />
              </div>
            </div>
          </div>
          <div class="flex -mx-3">
            <div class="w-full px-3 mb-5">
              <label for="" class="text-xs font-semibold px-1">Email</label>
              <div class="flex">
                <div
                  class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"
                >
                  <i class="mdi mdi-email-outline text-gray-400 text-lg" />
                </div>
                <input
                  bind:value={email}
                  type="email"
                  class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                  placeholder="johnsmith@example.com"
                />
              </div>
            </div>
          </div>
          <div class="flex -mx-3">
            <div class="w-full px-3 mb-5">
              <label for="" class="text-xs font-semibold px-1"
                >Phone Number</label
              >
              <div class="flex">
                <div
                  class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"
                >
                  <i class="mdi mdi-email-outline text-gray-400 text-lg" />
                </div>
                <input
                  bind:value={phone}
                  type="tel"
                  class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                  placeholder="+254 000 000 000"
                />
              </div>
            </div>
          </div>
          <div class="flex -mx-3">
            <div class="w-full px-3 mb-12">
              <label for="" class="text-xs font-semibold px-1">Password</label>
              <div class="flex">
                <div
                  class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"
                >
                  <i class="mdi mdi-lock-outline text-gray-400 text-lg" />
                </div>
                <input
                  bind:value={password}
                  type="password"
                  class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                  placeholder="************"
                />
              </div>
            </div>
          </div>
          <div class="flex -mx-3">
            <div class="w-full px-3 mb-5">
              <button
                on:click|preventDefault={register}
                class="block w-full max-w-xs mx-auto bg-orange-400 text-white rounded-lg px-3 py-3 font-semibold"
                >REGISTER NOW</button
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
