<script>
  import { SideNav, Showfilters, ShopPage } from "$lib/components";

  let menuState = false;
</script>

<div>
  <Showfilters
    on:toggle={() => {
      menuState = !menuState;
    }}
  />
</div>
<div class="flex justify-center gap-11">
  <div
    class="absolute pt-52 md:relative md:top-0 left-0 right-0 z-40 {menuState
      ? 'block '
      : 'hidden md:block'}"
  >
    <!-- <SideNav /> -->
  </div>
  <ShopPage />
</div>
