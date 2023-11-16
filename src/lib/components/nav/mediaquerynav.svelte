<script>
  import hamburger from "$lib/assets/images/hamburger.png"
  import {Sidebar} from "$lib/components"

  let hiddennav = false;

    function showingHiddenNav(){
        hiddennav = !hiddennav
    }


</script>

<nav class=" bg-white items-center md:hidden flex justify-between mx-auto px-6">
  <div class="flex justify-between w-full md:block md:w-auto" id="navbar-default">
    <div>
      <ul class="font-medium md:space-x-8 space-x-4 flex  md:p-0">
        <li>
          <a href="/" class="block py-2 text-black " aria-current="page">Home</a>
        </li>
        <li>
          <a href="/Shop" class="block py-2 text-black">Shop</a>
        </li>
        
      </ul>
    </div>
    <div>
      <button on:click={showingHiddenNav} class="py-2">
         <img  src={hamburger} alt="">
      </button>
    </div>
    {#if hiddennav }
            
      <div class="mt-8 space-y-4 absolute h-full  px-5 left-0   bg-[#ffffff] w-full">
         
        <Sidebar/>
      
      </div>
           
    {/if}
  </div>
</nav>
