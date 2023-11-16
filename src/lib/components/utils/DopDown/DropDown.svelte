<script>
  let isOpen = false;

  function toggleDropdown() {
    isOpen = !isOpen;
  }

  import Account from "$lib/assets/images/Account.png";
</script>

<div class="flex gap-4">
  <button class="" on:click={toggleDropdown}>
    <div class="flex md:mb-4 mb-0 mt-1 md:mt-0">
      <img src={Account} alt="Logo" class="md:h-10 h-6 md:w-10 w-6" />
      <div
        class="px-2 py-2 text-sm font-medium text-black rounded-md md:flex hidden"
      >
        Account
      </div>
    </div>
  </button>
  {#if isOpen}
    <div class="relative mt-6">
      <div
        class="absolute w-52 right-0 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg"
      >
        <a
          href="/Account"
          class="block px-4 py-2 text-gray-700 hover:bg-gray-100">My Profile</a
        >
        <a
          href="/Account/Orders"
          class="block px-4 py-2 text-gray-700 hover:bg-gray-100">My Orders</a
        >
        <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >Sign Out</a
        >
      </div>
    </div>
  {/if}
</div>
