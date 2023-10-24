
<script>

    import { Ruler } from "$lib/components";

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
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
        {#each otherData as product (product.id)}
          <div class="relative m-10 flex w-full flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
            <a class="relative flex h-60 overflow-hidden rounded-xl" href="#">
              <img class="object-cover" src={product.image} alt="" />
            </a>
            <div class="mt-4 px-5 pb-5">
              <div class="mt-2 mb-5 flex items-center justify-between">
                <p>
                  <span class="font-semibold text-lg flex">{product.title}</span>
                  <span class="text-3xl font-bold text-slate-900">${product.price}</span>
                  <span class="text-sm text-slate-900 line-through">${product.oldPrice}</span>
                </p>
                <div class="flex items-center">
                  {#each Array(product.rating) as _, i}
                    <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  {/each}
                </div>
              </div>
              <a href="#" class="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Add to cart
              </a>
            </div>
          </div>
        {/each}
    </div>
</Ruler>

  