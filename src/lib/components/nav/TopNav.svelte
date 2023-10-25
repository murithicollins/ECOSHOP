<script>
import { Logo,Search,Cart,Account,Hamburger } from '$lib/components';

export let sidebar = false
</script>

<header class="bg-slate-200	 z-50 top-0 fixed w-full">
  <div class="container mx-auto px-4 py-2 flex items-center ">
    <!-- <sidebar> -->
      <nav class="flex justify-between bg-gray-200 p-2 items-center text-gray-600 border-b-2">
        <Hamburger bind:open={sidebar}/>
      </nav>
      <!-- logo -->
    <div class="mr-auto md:w-48 flex-shrink-0">
    <Logo/>
    </div>
    <!-- search -->
    <Search/>
    <!--shoppingcart-->
    <div class="relative ml-auto md:w-48  sm:flex  ">
      <div class="">
        <Cart/>
      </div>
      <div class="flex justify-center items-center rounded-full px-2 absolute left-4 md:left-4 top-0 bg-[#E6242B] text-white">
        <!-- {$itemCount} -->
      </div>
    </div>
    <div class="flex gap-4 ml-10 md:ml-0 mb-4 md:mb-0">
      <div>
        <Account/>
      </div>
    </div>
  </div>
</header>   

