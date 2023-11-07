<script>
  import { Ruler, CartButton } from "$lib/components";
  import { shopitems, getshopitems } from "../../../store/catalog";
  import { onMount } from "svelte";

  let baseApiUrl = import.meta.env.VITE_BASE_URL;

  onMount(() => {
    getshopitems();
  });

  let otherData = [
    {
      id: 1,
      title: "Measurement Tape",
      image:
        "https://www.airconmarket.com.au/wp-content/themes/acm-2015/img/system-pic/img-refrigerated-1.jpg",
      price: 19.99,
      oldPrice: 24.99,
      rating: 4,
    },
    {
      id: 2,
      title: "Trowel",
      image:
        "https://image.made-in-china.com/202f0j00ZcjbSJhBekoC/Good-Quality-Hotel-Compressor-Mini-Air-Conditioner-for-Home-24000BTU-Aircons.webp",
      price: 29.99,
      oldPrice: 34.99,
      rating: 5,
    },
    {
      id: 3,
      title: "Concrete Mixer",
      image:
        "https://latestgamestories.com/wp-content/uploads/2022/08/Best-Split-Air-Conditioner-What-You-Need-To-Know-Before.jpg",
      price: 29.99,
      oldPrice: 34.99,
      rating: 5,
    },
    {
      id: 4,
      title: "Sand Screening Machine",
      image:
        "https://m.media-amazon.com/images/I/71VJcc4W++L._AC_UF894,1000_QL80_.jpg",
      price: 29.99,
      oldPrice: 34.99,
      rating: 5,
    },
    {
      id: 5,
      title: "Plumb Bob",
      image:
        "https://sc04.alicdn.com/kf/Haa026892009f4ce3a7d4cc68325f437c9.jpg_350x350.jpg",
      price: 29.99,
      oldPrice: 34.99,
      rating: 5,
    },
  ];
</script>

<Ruler>
  <div class="my-4">
    <h1 class="font-bold text-lg">Shop Power Tools</h1>
  </div>

  <div class="flex flex-wrap gap-5">
    {#each $shopitems as product (product.attributes.itemName)}
      <div
        class=" w-[255px] overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md"
      >
        <a class="flex justify-center w-full" href="#">
          <img
            class=" h-52 w-full object-contain"
            src={baseApiUrl + product.attributes.images.data[0].attributes.url}
          />
        </a>
        <div class="px-5 py-3 h-52 flex flex-col justify-evenly">
          <h3 class="font-bold capitalize my-2">
            {product.attributes.itemName}
          </h3>
          <div class="mt-4">
            <div class="mt-2 mb-5 flex items-center justify-between">
              <p>
                <span class="md:text-3xl text-lg font-bold text-slate-900"
                  >Ksh {product.attributes.price}</span
                >
                <!-- <span class="text-sm text-slate-900 line-through"
                  >${product.oldPrice}</span
                > -->
              </p>
            </div>
            <CartButton />
          </div>
        </div>
      </div>
    {/each}
  </div>
</Ruler>
