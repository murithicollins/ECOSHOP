
<script>

    import { Ruler,CartButton } from "$lib/components";

    let otherData = [
      {
        id: 1,
        title: "Measurement Tape",
        image: "https://www.airconmarket.com.au/wp-content/themes/acm-2015/img/system-pic/img-refrigerated-1.jpg",
        price: 19.99,
        oldPrice: 24.99,
        rating: 4,
      },
      {
        id: 2,
        title: "Trowel",
        image: "https://image.made-in-china.com/202f0j00ZcjbSJhBekoC/Good-Quality-Hotel-Compressor-Mini-Air-Conditioner-for-Home-24000BTU-Aircons.webp",
        price: 29.99,
        oldPrice: 34.99,
        rating: 5,
      },
      {
        id: 3,
        title: "Concrete Mixer",
        image: "https://latestgamestories.com/wp-content/uploads/2022/08/Best-Split-Air-Conditioner-What-You-Need-To-Know-Before.jpg",
        price: 29.99,
        oldPrice: 34.99,
        rating: 5,
      },
      {
        id: 4,
        title: "Sand Screening Machine",
        image: "https://m.media-amazon.com/images/I/71VJcc4W++L._AC_UF894,1000_QL80_.jpg",
        price: 29.99,
        oldPrice: 34.99,
        rating: 5,
      },
      {
        id: 5,
        title: "Plumb Bob",
        image: "https://sc04.alicdn.com/kf/Haa026892009f4ce3a7d4cc68325f437c9.jpg_350x350.jpg",
        price: 29.99,
        oldPrice: 34.99,
        rating: 5,
      },
    ]
</script>
  

<Ruler>
  <div class="my-4">
    <h1 class="font-bold text-lg">Shop Power Tools</h1>
  </div>
  <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 md:gap-10 gap-2">
      {#each otherData as product (product.id)}
        <div class="flex md:w-full w-44 md:h-full h-80 flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
          <a class="flex  items-center" href="#">
            <img class="object-cover" src={product.image} alt="" />
          </a>
          <div class="mt-4 px-5 pb-5">
            <div class="mt-2 mb-5 flex items-center justify-between">
              <p>
                <span class="md:text-3xl text-lg font-bold text-slate-900">${product.price}</span>
                <span class="text-sm text-slate-900 line-through">${product.oldPrice}</span>
              </p>
            </div>
            <CartButton/>
          </div>
        </div>
      {/each}
  </div>
</Ruler>
  