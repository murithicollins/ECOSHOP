<!-- <script>
	import { media } from '$app/stores';

	let isOpen = false;

	function toggleMenu() {
	  isOpen = !isOpen;
	}

	$: isSmallScreen = $media === 'small';
  </script>

  <style>
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

  </style>

  <div class="navbar">
	<div class="burger-icon" on:click={toggleMenu}>
	</div>
	<div class={`menu-list ${isOpen ? 'active' : ''}`}>
	  <a href="#">Home</a>
	  <a href="#">About</a>
	  <a href="#">Contact</a>
	</div>
  </div> -->
