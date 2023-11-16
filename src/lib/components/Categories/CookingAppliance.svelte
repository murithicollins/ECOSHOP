<!--
<script>

    import { Ruler,CartButton } from "$lib/components";

    let otherData = [
      {
        id: 1,
        title: "Measurement Tape",
        image: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/84/8096421/1.jpg?2451",
        price: 19.99,
        oldPrice: 24.99,
        rating: 4,
      },
      {
        id: 2,
        title: "Trowel",
        image: "https://media.takealot.com/covers_images/d348af59d33443a594fc2be94d85867a/s-pdpxl.file",
        price: 29.99,
        oldPrice: 34.99,
        rating: 5,
      },
      {
        id: 3,
        title: "Concrete Mixer",
        image: "https://media.extra.com/i/aurora/100139634_100_03?w=720",
        price: 29.99,
        oldPrice: 34.99,
        rating: 5,
      },
      {
        id: 4,
        title: "Sand Screening Machine",
        image: "https://haier.co.ke/wp-content/uploads/2022/02/ROYAL-Gas-Stove-GSSP-2GB013-scaled.jpg",
        price: 29.99,
        oldPrice: 34.99,
        rating: 5,
      },
      {
        id: 5,
        title: "Plumb Bob",
        image: "https://media.loot.co.za/images/x400/3898723787914179215.jpg",
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

   -->
