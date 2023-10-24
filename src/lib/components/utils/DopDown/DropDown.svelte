<script>
    let isOpen = false;
  
    function toggleDropdown() {
      isOpen = !isOpen;
    }

    
</script>
  
  <button class="px-2 py-2 text-sm font-medium text-black rounded-md "on:click={toggleDropdown}>Account</button>
  {#if isOpen}
  <div class="relative">
    <div class="absolute w-52 right-0 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg">
        <a href="/Account" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">My Profile</a>
        <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">My Orders</a>
        <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Sign Out</a>
    </div>
  </div>
  {/if}
  