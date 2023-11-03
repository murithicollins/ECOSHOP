
<script>

    import { Ruler,CartButton } from "$lib/components";

    let otherData = [
      {
        id: 1,
        title: "Measurement Tape",
        image: "https://hardwarecentre.co.za/wp-content/uploads/2021/05/GSB570.jpg",
        price: 19.99,
        oldPrice: 24.99,
        rating: 4,
      },
      {
        id: 2,
        title: "Trowel",
        image: "https://cdn-tp3.mozu.com/24645-37138/cms/37138/files/4d099bd2-35d7-4e18-bc01-cf949601998b?quality=50",
        price: 29.99,
        oldPrice: 34.99,
        rating: 5,
      },
      {
        id: 3,
        title: "Concrete Mixer",
        image: "https://www.ubuy.ke/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvODEwSVJUb0g4WUwuX0FDX1NMMTUwMF8uanBn.jpg",
        price: 29.99,
        oldPrice: 34.99,
        rating: 5,
      },
      {
        id: 4,
        title: "Sand Screening Machine",
        image: "https://www.khengsun.com/wp-content/uploads/2016/09/86.jpg",
        price: 29.99,
        oldPrice: 34.99,
        rating: 5,
      },
      {
        id: 5,
        title: "Plumb Bob",
        image: "https://constrofacilitator.com/wp-content/uploads/2022/06/cordless-jigsaw-1024x1011.jpg",
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

  