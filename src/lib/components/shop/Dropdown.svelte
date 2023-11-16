<ul class="mt-12 flex flex-col text-lg">
  <li class="relative transition">
    <input class="peer hidden" type="checkbox" id="menu-1" checked />
    <div
      class="relative m-2 flex items-center rounded-xl bg-white py-3 pl-5 text-sm text-gray-500"
    >
      <span class="mr-5 flex w-5 text-gray-500"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path
            fill="currentColor"
            d="M13 19h6V9.978l-7-5.444-7 5.444V19h6v-6h2v6zm8 1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.49a1 1 0 0 1 .386-.79l8-6.222a1 1 0 0 1 1.228 0l8 6.222a1 1 0 0 1 .386.79V20z"
          /></svg
        >
      </span>
      Category
      <label
        for="menu-1"
        class="absolute inset-0 h-full w-full cursor-pointer"
      />
    </div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="peer-checked:rotate-180 absolute right-0 top-6 mr-5 ml-auto h-4 text-gray-500 transition"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
    >
      <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
    <ul
      class="duration-400 peer-checked:max-h-96 m-2 flex max-h-0 flex-col overflow-hidden rounded-2xl bg-white transition-all duration-300"
    >
      <li
        class="m-2 flex cursor-pointer rounded-xl py-3 pl-5 text-sm text-gray-500 hover:bg-white"
      >
        <span class="mr-5"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            /></svg
          ></span
        >
        Category
      </li>
      <li
        class="m-2 flex cursor-pointer rounded-xl py-3 pl-5 text-sm text-gray-500 hover:bg-white"
      >
        <span class="mr-5"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
            /></svg
          ></span
        >
        Brand
      </li>
    </ul>
  </li>
</ul>
