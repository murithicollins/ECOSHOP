<script>
import { Logo,Search,Cart,Account } from '$lib/components'
</script>

<header class="bg-slate-200	 z-50 top-0 fixed w-full">
  <div class="container mx-auto px-4 py-2 flex items-center ">
    <!-- logo -->
    <div class="mr-auto md:w-48 flex-shrink-0">
    <Logo/>
    </div>
    <!-- search -->
    <Search/>
    <!--shoppingcart-->
    <div class="relative ml-auto md:w-48  sm:flex  ">
      <div class="mt-4">
        <Cart/>
      </div>
      <div class="flex justify-center items-center rounded-full px-2 absolute left-4 md:left-4 top-0 bg-[#E6242B] text-white">
        <!-- {$itemCount} -->
      </div>
    </div>
    <div class="flex gap-4 md:flex hidden">
      <div>
        <Account/>
      </div>
    </div>
  </div>
</header>   

