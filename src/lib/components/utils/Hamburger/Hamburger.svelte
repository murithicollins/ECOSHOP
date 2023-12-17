Hamburger.svelte
<script>
	import { media } from '$app/stores';
  
	let isOpen = false;
  
	function toggleMenu() {
	  isOpen = !isOpen;
	}
  
	$: isSmallScreen = $media === 'small';
  </script>
  
  <style>
	/* Tailwind CSS classes */
	.navbar {
	  @apply fixed top-8 left-0 right-0 flex justify-between items-center p-4 text-white;
	}
  
	.burger-icon {
	  @apply cursor-pointer text-white;
	}
  
	.menu-list {
	  @apply hidden absolute top-full left-0 bg-white text-black p-4;
	}
  
	.menu-list.active {
	  @apply block;
	}
  
	/* ... other styles remain the same ... */
  </style>
  
  <div class="navbar">
	<div class="burger-icon" on:click={toggleMenu}>
	  <!-- ... your existing icon code ... -->
	</div>
	<div class={`menu-list ${isOpen ? 'active' : ''}`}>
	  <!-- Your menu items go here -->
	  <a href="#">Home</a>
	  <a href="#">About</a>
	  <a href="#">Contact</a>
	</div>
  </div>
  