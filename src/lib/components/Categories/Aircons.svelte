<script>
  // @ts-nocheck

  import { Ruler, CartButton } from "$lib/components";
  import { shopitems, getshopitems } from "../../../store/catalog";
  import { onMount } from "svelte";

  // let baseApiUrl = import.meta.env.VITE_BASE_URL;
  export let shopItems;
</script>

<Ruler>
  <div class="mb-4">
    <h1 class="font-bold text-lg">Buy More Materials</h1>
  </div>

  <div class="flex flex-wrap gap-5 justify-start">
    {#each shopItems as product (product.id)}
      <div
        class=" w-[255px] overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md"
      >
        <a class="flex justify-center w-full" href="#">
          <img
            class=" h-52 w-full object-contain"
            src={product.product_images[0]?.image_data.file}
          />
        </a>
        <div class="px-5 py-3 h-52 flex flex-col justify-between">
          <h3 class="font-bold capitalize my-2">
            {product.name}
          </h3>
          <div class="mt-4">
            <div class="mt-2 mb-5 flex items-center justify-between">
              <p>
                <span class="md:text-3xl text-lg font-bold text-slate-900"
                  >Ksh {product.price}</span
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
