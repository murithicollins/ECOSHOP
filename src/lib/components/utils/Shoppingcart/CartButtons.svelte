<script>
  import { addToCart } from "../../../../store/cart";

  // @ts-ignore
  export let item;

  // @ts-ignore
  export async function addToCartBtn() {
    // @ts-ignore
    addToCart(item);
    // console.log(item);
  }
  // export let button = 'button value';
  export let customClasses =
    "w-full flex items-center justify-center rounded border-2 text-orange-400 border-orange-400 px-5 py-2.5 text-center text-sm font-medium text-orange-400 hover:bg-orange-400 hover:text-white focus:outline-none ";
</script>

<button class={customClasses} on:click={addToCartBtn}>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class=" md:h-6 h-4 md:w-6 w-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    stroke-width="2"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
    />
  </svg>
  Add to cart
</button>
