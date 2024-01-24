<script>
  import { Showfilters, ShopPage } from "$lib/components";
  import { onMount } from "svelte";
  import { getshopitems, shopitems } from "../../store/catalog";
  import { page } from "$app/stores";
  const business = $page.data.business.business;

  let menuState = false;
  onMount(() => {
    getshopitems(business.id);
    // getCategories(business.id);
    // getByCategoryName(business.id);
  });
</script>

<div>
  <Showfilters
    on:toggle={() => {
      menuState = !menuState;
    }}
  />
</div>
<div class="flex justify-center gap-11">
  <!-- <div class="absolute pt-52 md:relative md:top-0 left-0 right-0 z-40 {menuState? 'block ': 'hidden md:block'}"></div> -->
  <ShopPage shopItems={$shopitems} />
</div>
