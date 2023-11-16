<script>
  import heroimage from "$lib/assets/images/heroimage.jpg";
  import { Ruler } from "$lib/components";
</script>

<Ruler>
  <div class="flex mb-20 mt-52 shadow-lg rounded-md">
    <div class="w-1/2 p-4 bg-orange-50">
      <div class="my-20 px-11">
        <h1 class="text-lg md:text-5xl font-bold">
          November Black Friday. <br />
          <p class="text-2xl my-8">
            Get to buy materials at best offers. #heresToHome
          </p>
          <br />
        </h1>
        <p class="text-gray-600">
          Offer valid from 3 November - 27 November 2023
        </p>
        <a href="/Shop">
          <button
            class="md:my-12 my-6 text-white bg-orange-400 font-semibold py-3 px-11 rounded-full"
          >
            Buy Now
          </button>
        </a>
      </div>
    </div>
    <div class="h-full w-1/2">
      <img src={heroimage} class="  h-full object-cover" />
    </div>
  </div>
</Ruler>
