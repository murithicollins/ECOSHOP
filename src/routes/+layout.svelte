<script>
  import "../app.css";
  import { Navigation, SecondNav } from "$lib/components";
  // import { SecondNav } from "$lib/components"
  import { SvelteToast } from "@zerodevx/svelte-toast";
</script>

<div class="app">
  <SvelteToast />
  <div class=" pt-[8rem]">
    <Navigation />
  </div>
  <slot />
</div>

<style>
</style>
