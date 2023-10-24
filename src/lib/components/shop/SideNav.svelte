
<script>
import { onMount } from "svelte";
import { ShopPage } from "$lib/components";

let price = 150;

const updatePrice = (e) => {
  price = +e.target.value;
};

onMount(() => {
  // Add any initialization or side effects here
});
</script>

<div class="bg-slate-200 flex h-screen">
  <div class="h-screen">
    <div class="my-4 flex h-5/6 w-72 flex-col rounded-tr-2xl rounded-br-2xl bg-gray-200">
      <div class="bg-gray-200 text-xl p-4">Price: ${price}</div>
      <div class="m-2 rounded-xl border-b-4 border-gray-300 bg-gray-50 py-3 px-4 text-sm text-gray-500">
        <div class="p-4 flex justify-between">
          <h1>0</h1>
          <h1>1000</h1>
        </div>
        <input class="w-full" type="range"bind:value={price} min="0"max="1000"step="1"on:input={updatePrice}/>
      </div>
      <ul class="mt-12 flex flex-col">
        <li class="relative transition">
          <input class="peer hidden" type="checkbox" id="menu-1" checked />
          <div class="relative m-2 flex items-center rounded-xl border-b-4 border-gray-300 bg-gray-50 py-3 pl-5 text-sm text-gray-500">
            <span class="mr-5 flex w-5 text-gray-500"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="currentColor" d="M13 19h6V9.978l-7-5.444-7 5.444V19h6v-6h2v6zm8 1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.49a1 1 0 0 1 .386-.79l8-6.222a1 1 0 0 1 1.228 0l8 6.222a1 1 0 0 1 .386.79V20z" /></svg>
            </span>
            Category
            <label for="menu-1" class="absolute inset-0 h-full w-full cursor-pointer"></label>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" class="peer-checked:rotate-180 absolute right-0 top-6 mr-5 ml-auto h-4 text-gray-500 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
          <ul class="duration-400 peer-checked:max-h-96 m-2 flex max-h-0 flex-col overflow-hidden rounded-2xl bg-gray-100 transition-all duration-300">
            <li class="m-2 flex cursor-pointer rounded-xl py-3 pl-5 text-sm text-gray-500 hover:bg-white">
              <span class="mr-5"
                ><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg
              ></span>
              Category
            </li>
            <li class="m-2 flex cursor-pointer rounded-xl py-3 pl-5 text-sm text-gray-500 hover:bg-white">
              <span class="mr-5"
                ><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg
              ></span>
              Brand
            </li>
          </ul>
        </li>
        <!-- <li class="relative transition">
          <div class="relative m-2 flex cursor-pointer items-center rounded-xl py-3 pl-5 text-sm text-gray-500 hover:bg-gray-50">
            <span class="mr-5 flex w-5 text-gray-500"
              ><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg
            ></span>
            Support Tickets
          </div>
        </li>
        <li class="relative transition">
          <div class="relative m-2 flex cursor-pointer items-center rounded-xl py-3 pl-5 text-sm text-gray-500 hover:bg-gray-50">
            <span class="mr-5 flex w-5 text-gray-500"
              ><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg
            ></span>
            Settings
          </div>
        </li> -->
      </ul>
    </div>
  </div>
  <ShopPage/>
</div>
