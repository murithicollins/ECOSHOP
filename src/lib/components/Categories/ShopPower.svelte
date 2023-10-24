
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
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
        {#each otherData as product (product.id)}
          <div class="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
            <a class="relative flex h-60 overflow-hidden rounded-xl" href="#">
              <img class="object-cover" src={product.image} alt="" />
            </a>
            <div class="mt-4 px-5 pb-5">

              <div class="mt-2 mb-5 flex items-center justify-between">
                <p>
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
              <CartButton/>
            </div>
          </div>
        {/each}
    </div>
</Ruler>

  