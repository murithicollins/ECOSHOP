

    <script>
      // export let open = false;
      import orderhistory from "$lib/assets/images/orderhistory.png";
      import whishlist from "$lib/assets/images/wishlist.png";
      import personaldetails from "$lib/assets/images/personaldetails.png";
      import Address from "$lib/assets/images/Address.png";
      import logout from "$lib/assets/images/logout.png";
    </script>
    
    <aside class="mt-24  w-72 md:h-full bg-white border-r-2 shadow-lg">
      <div class="flex flex-col justify-between">
        <div class="flex-grow">
          <div class="px-5  ">
            <h1 class="text-lg font-bold">Account Name</h1>
          </div>
          <div class="p-4">
            <ul class="space-y-1">
              <li>
                <a href="/Account/Orders" class="flex gap-4 items-center hover:bg-blue-50 rounded-xl font-semibold text-sm  py-3 px-1">
                  <img src="{orderhistory}" alt="Logo" class="h-6 w-6"/>
                  Order
                </a>
                <div class="border-b w-44 border-black my-2"></div>
              </li>
              <li class="py-5">
                <div class="">
                  <h1 class="text-lg font-bold">My Items</h1>
                </div>
                <a href="/Account/Wishlists" class="flex gap-4 items-center hover:bg-blue-50 rounded-xl font-semibold text-sm  py-3 px-1">
                  <img src="{whishlist}" alt="Logo" class="h-6 w-6"/>
                  Wishlist
                </a>
                <div class="border-b w-44 border-black my-2"></div>
              </li>
              <li class="">
                <div class="mb-4">
                  <h1 class="text-lg font-bold">Manage Account</h1>
                </div>
                <a href="/Account/PersonalDetails" class="flex gap-4 items-center hover:bg-blue-50 rounded-xl font-semibold text-sm  py-3 px-1">
                  <img src="{personaldetails}" alt="Logo" class="h-6 w-6"/>
                  Personal Details
                </a>
              </li>
              <li class="">
                <a href="/Account/Addresses" class="flex gap-4 items-center hover:bg-blue-50 rounded-xl font-semibold text-sm  py-3 px-1">
                  <img src="{Address}" alt="Logo" class="h-6 w-6"/>
                  Address
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="p-4">
          <button type="button" class="flex gap-4 items-center hover:bg-blue-50 rounded-xl font-semibold text-sm  py-3 px-1">
            <img src="{logout}" alt="Logo" class="h-6 w-6"/>
            <h1 class="">Logout</h1>
          </button> 
        </div>
      </div>
    </aside>
    
    <!-- <style>
      .side {
        left: -100%;
        transition: left 0.3s ease-in-out
      }
      
      .open {
        left: 0
      }
    </style> -->