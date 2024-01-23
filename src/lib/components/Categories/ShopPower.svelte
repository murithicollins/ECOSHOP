<script>
  // @ts-nocheck

  import { Ruler, CartButton } from "$lib/components";
  // import {
  //   shopitems,
  //   getshopitems,
  //   itemsBycategory,
  //   getByCategoryName,
  // } from "../../../store/catalog";
  import { onMount } from "svelte";

  let baseApiUrl = import.meta.env.VITE_BASE_URL;
  export let itemsBycategory;

  onMount(() => {
    // getshopitems();
    // getByCategoryName();
  });
</script>

<Ruler>
  {#each itemsBycategory as item}
    <div class="my-8">
      <h1 class="font-semibold text-2xl">{item.categoryName}</h1>
    </div>
    <div class="flex flex-wrap gap-5 mt-8 justify-start">
      {#each item.items as product (product.id)}
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
                </p>
              </div>
              <CartButton item={product} />
            </div>
          </div>
        </div>
      {/each}
    </div>
  {/each}
</Ruler>
