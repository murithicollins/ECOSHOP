<script>
import { Ruler } from "$lib/components"
</script>

<Ruler>
    <nav class="bg-white w-full border-gray-200 dark:bg-gray-900 mt-20">
        <div class="max-w-screen-xl flex  items-center justify-between mx-auto p-4">
          <div class=" w-full md:block md:w-auto" id="navbar-default">
            <ul class="font-medium md:space-x-8 space-x-4 flex md:p-0">
              <li>
                <a href="/" class="block py-2 text-black rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
              </li>
              <li>
                <a href="/Shop" class="block py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Shop</a>
              </li>
            </ul>
          </div>
          <a href="/Login">
            <div>
              <h1 class="font-bold  hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Login</h1>
            </div>
          </a>
    </nav>
</Ruler>

  