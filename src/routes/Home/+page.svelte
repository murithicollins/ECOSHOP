<script>
  import {
    CookingAppliance,
    Herosection,
    Popular,
    ShopPower,
    WhyShop,
    Aircons,
    // Sidebar,
  } from "$lib/components";
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  import { getCategories, categories } from "../../store/categories";
  import {
    getshopitems,
    shopitems,
    getByCategoryName,
    itemsBycategory,
  } from "../../store/catalog";

  const business = $page.data.business.business;
  // console.log(business);
  onMount(() => {
    getshopitems(business.id);
    getCategories(business.id);
    getByCategoryName(business.id);
  });
</script>

<Herosection />
<Popular categories={$categories} />
<ShopPower itemsBycategory={$itemsBycategory} />
<WhyShop />
<!-- <CookingAppliance /> -->
<Aircons shopItems={$shopitems} />
<!-- {$shopitems} -->
