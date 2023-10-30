<script>
import { onMount } from "svelte";
let price = 150;

const updatePrice = (e) => {
  price = +e.target.value;
};

onMount(() => {
  // Add any initialization or side effects here
});
</script>

<div class="md:bg-gray-200 bg-white text-xl p-4">Price: ${price}</div>
<div class="m-2 rounded-xl border-b-4 border-gray-300 bg-gray-50 py-3 px-4 text-sm text-gray-500">
  <div class="p-4 flex justify-between">
    <h1>0</h1>
    <h1>1000</h1>
  </div>
  <input class="w-full bg-black" type="range"bind:value={price} min="0"max="1000"step="1"on:input={updatePrice}/>
</div>