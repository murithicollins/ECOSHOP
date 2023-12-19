<script>
  import heroimage from "$lib/assets/images/heroimage.jpg";
  import { Ruler } from "$lib/components";
</script>

<Ruler>
  <div class="flex mx-5 md:mx-11 mb-20 shadow-lg rounded-md h-96 md:h-full">
    <div class="md:w-1/2 p-4 bg-orange-50">
      <div class="md:my-20 my-10 px-11">
        <h1 class="md:text-lg text-md md:text-5xl font-bold">
          Get to buy materials at best offers. #heresToHome
        </h1>
        <p class="text-gray-600 text-sm my-4">
          Offer valid from 3 November - 27 November 2023
        </p>
        <a href="/Shop">
          <button
            class="md:my-12 md:my-6 my-4 text-white bg-orange-400 font-semibold text-sm md:text-lg md:py-3 py-1.5 md:px-11 px-4 rounded-full"
          >
            Buy Now
          </button>
        </a>
      </div>
    </div>
    <div class="h-full md:w-1/2 hidden md:flex items-center">
      <img src={heroimage} class="md:h-full md:object-cover" />
    </div>
  </div>
</Ruler>
