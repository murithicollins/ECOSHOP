<script>
  import Cart from "$lib/assets/images/Cart.png";
  import { cart } from "../../../../store/cart";
</script>

<a href="/cart" class="relative pointer">
  <div
    class="{$cart.length > 0
      ? 'animate-bounce'
      : ''} bg-orange-400 absolute top-[-0.5rem] md:top-0 right-[-1rem] md:right-0 rounded-full md:h-8 h-5 md:w-8 w-5 font-semibold text-center text-lg flex items-center justify-around text-white"
  >
    <p>{$cart.length}</p>
  </div>
  <div><img src={Cart} alt="Logo" class="md:h-12 h-5 md:w-12 w-5" /></div>
</a>
