<script>
  import { goto } from "$app/navigation";
  import { toast } from "@zerodevx/svelte-toast";
  import { stringify } from "postcss";
  import { onMount } from "svelte";

  let email = "";
  let password = "";

  async function login() {
    if (email === "") {
      toast.push("email is required");
    }
    if (password === "") {
      toast.push("password is required");
    } else {
      const API_BASE_URL = import.meta.env.VITE_BASE_URL; // Replace with your actual API base URL

      const response = await fetch(`${API_BASE_URL}/api/user/custom-auth`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          identifier: email,
          password: password,
        }),
      });
      // sessionStorage.removeItem("user");
      if (response.ok) {
        const { jwt, user } = await response.json();

        sessionStorage.setItem("access_token", jwt);
        sessionStorage.setItem("user", JSON.stringify(user));
        // console.log(sessionStorage.getItem("user"));
        toast.push("Login Succesfully");
        goto("/Shop");
      } else {
        const { message } = await response.json();
        console.log(response.json());

        toast.push(message, {
          theme: {
            "--toastBackground": "red",
            "--toastColor": "white",
            "--toastBarBackground": "red",
          },
        });
      }
    }
  }
</script>

<div
  class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
>
  <div
    class="w-full rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 bg-orange-50 dark:border-gray-700"
  >
    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
      <h1
        class="text-xl font-bold leading-tight tracking-tight text-black md:text-2xl"
      >
        Login in to your account
      </h1>
      <form class="space-y-4 md:space-y-6">
        <div>
          <label for="email" class="block mb-2 text-sm font-medium text-black"
            >Your email or phone</label
          >
          <input
            bind:value={email}
            type="text"
            name="email"
            id="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm focus:outline-none rounded block w-full p-2.5"
            placeholder="name@company.com or 07********"
            required
          />
        </div>
        <div>
          <label
            for="password"
            class="block mb-2 text-sm font-medium text-black">Password</label
          >
          <input
            bind:value={password}
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:outline-none block w-full p-2.5"
            required
          />
        </div>
        <div class="flex items-center justify-between">
          <div class="flex items-start">
            <div class="flex items-center h-5">
              <input
                id="remember"
                aria-describedby="remember"
                type="checkbox"
                class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
              />
            </div>
            <div class="ml-3 text-sm">
              <label for="remember" class="text-black">Remember me</label>
            </div>
          </div>
          <a
            href="#"
            class="text-sm font-medium text-primary-600 hover:underline"
            >Forgot password?</a
          >
        </div>
        <button
          type="submit"
          class="w-full text-white bg-orange-400 font-medium rounded text-sm px-5 py-2.5 text-center"
          on:click={login}>Sign in</button
        >
        <p class="text-sm font-light text-gray-600">
          Don’t have an account yet? <a
            href="/Signup"
            class="font-medium text-gray-800 hover:underline dark:text-primary-500"
            >Sign up</a
          >
        </p>
      </form>
    </div>
  </div>
</div>
