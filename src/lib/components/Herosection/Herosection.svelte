<script>
  import heroimage from "$lib/assets/images/heroimage.jpg";
  import { Ruler } from "$lib/components";
</script>

<Ruler>
  <div class="flex mb-16 h-96 shadow-lg rounded-md">
    <div class="w-1/2 p-4 bg-orange-100">
      <div class="my-20">
        <h1 class="text-lg md:text-3xl font-bold">Every tool to get the job done.<br>#HeresToHome<br></h1>
        <p>Valid from 3 October - 27 November 2023</p>
        <button class="md:my-12 my-6 bg-transparent text-black font-semibold py-2 px-4 border border-black rounded-full">
          Button
        </button>
      </div>
    </div>
    <div class="w-1/2 md:p-4 my-24 md:my-0">
      <img src={heroimage} class="">
    </div>
  </div>
</Ruler>
