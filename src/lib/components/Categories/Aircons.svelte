<script>
  import { Ruler, CartButton } from "$lib/components";
  import { shopitems, getshopitems } from "../../../store/catalog";
  import { onMount } from "svelte";

  let baseApiUrl = import.meta.env.VITE_BASE_URL;

  onMount(() => {
    getshopitems();
  });
</script>

<Ruler>
  <div class="mb-4">
    <h1 class="font-bold text-lg">Buy More Materials</h1>
  </div>

  <div class="flex flex-wrap gap-5 justify-between">
    {#each $shopitems as product (product.id)}
      <div
        class=" w-[255px] overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md"
      >
        <a class="flex justify-center w-full" href="#">
          <img
            class=" h-52 w-full object-contain"
            src={baseApiUrl +
              product.attributes.images.data?.[0].attributes?.url}
          />
        </a>
        <div class="px-5 py-3 h-52 flex flex-col justify-between">
          <h3 class="font-bold capitalize my-2">
            {product.attributes.itemName}
          </h3>
          <div class="mt-4">
            <div class="mt-2 mb-5 flex items-center justify-between">
              <p>
                <span class="md:text-3xl text-lg font-bold text-slate-900"
                  >Ksh {product.attributes.price}</span
                >
                <!-- <span class="text-sm text-slate-900 line-through"
                  >${product.oldPrice}</span
                > -->
              </p>
            </div>
            <CartButton item={product} />
          </div>
        </div>
      </div>
    {/each}
  </div>
</Ruler>
