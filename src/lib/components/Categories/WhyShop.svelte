<script>
  import { Ruler } from "$lib/components";
  import Bestofdeals from "$lib/assets/images/Bestofdeals.png";
  import tick from "$lib/assets/images/tick.png";
  import delivery from "$lib/assets/images/delivery.png";
</script>

<Ruler>
  <div
    class="grid grid-cols-1 gap-4 sm:grid-cols-4 items-center bg-slate-100 my-8"
  >
    <div class="p-4">
      <h1 class="font-bold text-2xl my-14">Why Shop at Builders?</h1>
    </div>
    <div class="p-4">
      <div
        class="w-12 h-12 border border-black rounded-full flex items-center justify-center"
      >
        <img src={Bestofdeals} alt="Your Image" class="w-6 h-6" />
      </div>
      <h1 class="font-bold text-lg my-2">Best deals</h1>
      <p class="text-sm">
        We have the best deals on wildest range of quality products
      </p>
    </div>
    <div class=" p-4">
      <div
        class="w-12 h-12 border border-black rounded-full flex items-center justify-center"
      >
        <img src={tick} alt="Your Image" class="w-6 h-6" />
      </div>
      <h1 class="font-bold text-lg my-2">Get it done</h1>
      <p class="text-sm">
        Your Local Builders, convenient shipping in-store or online.
      </p>
    </div>
    <div class=" p-4">
      <div
        class="w-12 h-12 border border-black rounded-full flex items-center justify-center"
      >
        <img src={delivery} alt="Your Image" class="w-6 h-6" />
      </div>
      <h1 class="font-bold text-lg my-2">Free Delivery</h1>
      <p class="text-sm">Spend R 500 or more online & get free delivery</p>
    </div>
  </div>
</Ruler>
