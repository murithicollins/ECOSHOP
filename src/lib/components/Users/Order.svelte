<script>
  let orders = [];
</script>

<div class="md:ml-24 ml-0 md:mt-24 mt-0 container p-2 mx-auto rounded-md sm:p-4 bg-white shadow-md">
  <h2 class="mb-3 text-2xl font-semibold leadi">Standings</h2>
  <div class="overflow-x-auto">
    <table class="min-w-full text-xs">
      <thead class="rounded-t-lg">
        <tr class="text-right">
          <th title="Ranking" class="p-3 text-left">#</th>
          <th title="Team name" class="p-3 text-left">Price</th>
          <th title="Wins" class="p-3">items</th>
        </tr>
      </thead>
      <tbody>
        {#if orders}
          <tr class="text-right border-b border-opacity-20 border-gray-700">
            <td class="px-3 py-2 text-left">
              <span>1</span>
            </td>
            <td class="px-3 py-2 text-left">
              <span>ksh:100</span>
            </td>
            <td class="px-3 py-2">
              <span>31</span>
            </td>
          </tr>
        {:else}
          <tr><td> <p>Nore Orders Yet</p></td> </tr>
        {/if}
      </tbody>
    </table>
  </div>
</div>
