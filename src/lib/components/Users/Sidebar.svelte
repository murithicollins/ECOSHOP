<script>
  // export let open = false;
  import orderhistory from "$lib/assets/images/orderhistory.png";
  import personaldetails from "$lib/assets/images/personaldetails.png";
  import logout from "$lib/assets/images/logout.png";
</script>

<aside class="mt-10 flex md:w-72 w-10/12 md:h-full bg-white border-r-2 shadow-lg">
  <div class="flex flex-col justify-between w-full">
    <div class="flex-grow">
      <div class="px-5">
        <h1 class="md:text-lg text-sm font-bold">Your Account</h1>
      </div>
      <div class="p-4">
        <ul class="space-y-1">
          <li>
            <a href="/Account/Orders" class="flex md:gap-4 gap-2 items-center hover:bg-blue-50 rounded-xl font-semibold text-sm py-3 px-1">
              <img src={orderhistory} alt="Logo" class="md:h-6 h-4 md:w-6 w-4" />
              My Orders
            </a>
          </li>
          <li class="">
            <div class="mb-4" />
            <a href="/Account/PersonalDetails" class="flex md:gap-4 gap-2 items-center hover:bg-blue-50 rounded-xl font-semibold text-sm py-3 px-1">
              <img src={personaldetails} alt="Logo" class="md:h-6 h-4 md:w-6 w-4" />
              Personal Details
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="px-4 py-2 bg-gray-100 w-full">
      <button
        type="button"
        class="flex gap-4 items-center hover:bg-blue-50 rounded-xl font-semibold text-sm py-3 px-1"
      >
        <img src={logout} alt="Logo" class="md:h-6 h-4 md:w-6 w-4" />
        <h1 class="">Sign Out</h1>
      </button>
    </div>
  </div>
</aside>
