<script>
  // @ts-nocheck

  import { Ruler } from "$lib/components";
  // import { categories, getCategories } from "../../../store/categories";
  import { onMount } from "svelte";
  let baseApiUrl = import.meta.env.VITE_BASE_URL;
  export let categories;
</script>

<Ruler>
  <div class="my-4">
    <h1 class="font-bold text-lg">Popular Categories</h1>
  </div>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
  >
    {#each categories as cat (cat.id)}
      <div class="flex flex-col items-center">
        <div
          class="b overflow-hidden border-2 border-gray-300 w-28 h-28 rounded-full relative flex items-center justify-center"
        >
          <!-- {cat.image_data[0].image.file} -->
          <img
            alt="Centered Image"
            class=" object-contain w-full h-full p-2 rounded-full"
            src={cat.image_data[0].image.file}
          />
        </div>
        <div class="my-4">
          <h1 class="font-bold text-lg">{cat.name}</h1>
        </div>
      </div>
    {/each}
  </div>
</Ruler>

<!-- <Ruler>
  <div class="my-4">
    <h1 class="font-bold text-lg">Popular Categories</h1>
  </div>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
  >
    {#each $categories as cat (cat.attributes.categoryName)}
      <div class="flex flex-col items-center">
        <div
          class="bg-blue-200 overflow-hidden border-2 border-gray-300 w-28 h-28 rounded-full relative flex items-center justify-center"
        >
          <img
            src={baseApiUrl + cat.attributes.image.data.attributes.url}
            alt="Centered Image"
            class=" object-cover w-full h-full unded-full"
          />
        </div>
        <div class="my-4">
          <h1 class="font-bold text-lg">{cat.attributes.categoryName}</h1>
        </div>
      </div>
    {/each}
  </div>
</Ruler> -->
