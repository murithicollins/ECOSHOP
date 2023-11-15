<script>
  import { onMount } from "svelte";

  let isSmallScreen = false;
  let isSearchOpen = false;

  // A custom media query function
  function checkScreenSize() {
    isSmallScreen = window.innerWidth < 640; // Adjust the width as needed
  }

  onMount(() => {
    // Call the custom media query function on initial load and when the window is resized
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
  });

  function toggleSearch() {
    if (isSmallScreen) {
      isSearchOpen = !isSearchOpen;
    }
  }
</script>

<div class=" relative md:px-4 px-0 py-2 flex">
  <button
    class="w-12 md:absolute right-0 top-0 p-4 md:mt-1 md:mr-4 md:mt-2 md:border-l border-gray-300"
    on:click={toggleSearch}
  >
    <svg
      class="text-gray-600 h-4 w-4 fill-current"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      version="1.1"
      id="Capa_1"
      x="0px"
      y="0px"
      viewBox="0 0 56.966 56.966"
      style="enable-background:new 0 0 56.966 56.966;"
      xml:space="preserve"
      width="512px"
      height="512px"
    >
      <path
        d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
      />
    </svg>
  </button>
  {#if isSmallScreen}
    {#if isSearchOpen}
      <input
        class="border-2 absolute top-28 right-0 border-gray-300 bg-white px-5 h-12 rounded-lg text-sm focus:outline-none"
        type="search"
        name="search"
        placeholder="Search"
      />
    {/if}
  {:else}
    <input
      class="md:block border-2 border-gray-300 bg-white h-12 px-5 pr-16 h-12 w-96 rounded-lg text-sm focus:outline-none"
      type="search"
      name="search"
      placeholder="Search"
    />
  {/if}
</div>
