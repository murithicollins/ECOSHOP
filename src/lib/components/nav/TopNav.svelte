<script>
  import {
    Logo,
    Search,
    Cart,
    Account,
    Hamburger,
    SecondNav,
    mediaquerynav,
  } from "$lib/components";
  import login from "$lib/assets/images/login.png";
  import Mediaquerynav from "./mediaquerynav.svelte";
  export let sidebar = false;
</script>

<header class="bg-orange-50 z-50 top-0 fixed w-full">
  <div class="container mx-auto py-3 flex items-center">
    <!-- <sidebar> -->
    <nav
      class="flex justify-between bg-orange-50 mx-5 md:hidden items-center text-gray-600 border-b-2"
    >
      <Hamburger bind:open={sidebar} />
    </nav>
    <!-- logo -->
    <div class="mr-auto md:w-48 flex-shrink-0">
      <Logo />
    </div>
    <div>
      <SecondNav />
    </div>

    <div class="flex items-center md:gap-20 gap-2">
      <div class="">
        <Search />
      </div>
      <div class="">
        <div class="">
          <Cart />
        </div>
      </div>
      <div class="flex gap-4">
        <div>
          <Account />
        </div>
      </div>
      <div>
        <a class="" href="/Login">
          <div class="flex justify-center items-center">
            <img src={login} alt="Logo" class="md:h-10 h-8 md:w-10 w-8" />
            <h1 class="font-bold md:flex hidden">Login</h1>
          </div>
        </a>
      </div>
    </div>
  </div>
  <Mediaquerynav />
</header>
