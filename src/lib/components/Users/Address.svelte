<script>
    import search from "$lib/assets/images/search.png";
    import cancel from "$lib/assets/images/cancel.png"

    let isModalOpen = false;
  
    function openModal() {
        isModalOpen = true;
    }
  
    function closeModal() {
        isModalOpen = false;
    }
</script>

<div class="ml-72">
    <div class="">
        <div class="flex justify-between mb-6">
            <h1 class="font-bold text-2xl mb-4">Order History</h1>
            <button class="border border-blue-500 px-4 rounded-full text-blue-600" on:click={openModal}>+<span class="font-bold ml-4">Add new address</span></button>
        </div>
        <div class="border-b border-black"></div>
    </div>
    <div class="flex flex-col items-center my-56">
        <div class="mb-6">
            <p class="text-lg">You haven't added any addresses yet</p>
        </div>
        <div class="flex">
            <img src="{search}" alt="Logo" class="h-36 w-36" />
        </div>
    </div>
</div>

{#if isModalOpen}
    <div class="fixed inset-0 flex items-center justify-center z-50">
        <div class="modal-background"></div>
        <div class="modal-container mx-10"> 
            <div class="bg-white px-4 py-4 rounded shadow-lg h-full w-full flex-grow">
                <!-- Your modal content goes here -->
                <div class="flex justify-between">
                    <div>
                        <h1 class="font-bold">Add new address</h1>
                    </div>
                    <button class=""on:click={closeModal}>
                        <img src="{cancel}" alt="Logo" class="h-8 w-8"/>
                    </button>                    
                </div>

                <div class="border-b w-full my-4"></div>
                <div>
                    <h1>
                        Let's make sure your order gets delivered to the right place.Select an address below or add a new one
                    </h1>
                </div>
                <div class="relative text-gray-600 mt-4">
                    <input type="search" name="serch" placeholder="Type your delivery address" class="bg-white border w-full h-10 px-5 pr-10 rounded-full text-sm focus:outline-none">
                    <button type="submit" class="absolute right-0 top-0 mt-3 mr-4">
                    <svg class="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;" xml:space="preserve" width="512px" height="512px">
                        <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"/>
                    </svg>
                    </button>
                </div>
                <div class="border-b w-full my-4"></div>
                <div>
                    <div>
                        <h1 class="font-bold text-sm mb-2">Street Address</h1>
                    </div>
                    <div>
                        <input type="search" name="serch" placeholder="Enter street address eg.34 Eloff street" class="bg-white border w-full h-10 px-5 pr-10 rounded-md text-sm focus:outline-none">
                    </div>
                </div>
                <div>
                    <div>
                        <h1 class="font-bold text-sm my-2">Complex,building, unit/floor number</h1>
                    </div>
                    <div>
                        <input type="search" name="serch" placeholder="Enter street address eg.34 Eloff street" class="bg-white border w-full h-10 px-5 pr-10 rounded-md text-sm focus:outline-none">
                    </div>
                </div>
                <div>
                    <div>
                        <h1 class="font-bold text-sm my-2">Suburb</h1>
                    </div>
                    <div>
                        <input type="search" name="serch" placeholder="Enter suburb here" class="bg-white border w-full h-10 px-5 pr-10 rounded-md text-sm focus:outline-none">
                    </div>
                </div>
                <div class="my-4">
                    <label for="" class="text-xs font-semibold px-1">Delivery instructions(if any)</label>
					<textarea placeholder="Please include any instructions four our couriers" class="w-full h-32 border text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
				</div>
                <div class="border-b w-full my-2"></div>
                <div>
                    <h1 class="font-bold text-sm my-2">Recipient details</h1>
                </div>
                <div class="flex gap-10">
                    <div class="w-1/2  mb-5">
                        <label for="" class="text-xs font-semibold px-1">City/Town</label>
                        <input type="search" name="serch" placeholder="Enter suburb here" class="bg-white border w-full h-10 px-5 pr-10 rounded-md text-sm focus:outline-none">
                    </div>
                    <div class="w-1/2  mb-5">
                        <label for="" class="text-xs font-semibold px-1">Postal code</label>
                        <input type="search" name="serch" placeholder="Enter suburb here" class="bg-white border w-full h-10 px-5 pr-10 rounded-md text-sm focus:outline-none">
                    </div>
                </div>
                <div>
                    <div>
                        <h1 class="font-bold text-sm my-2">Mobile number</h1>
                    </div>
                    <div>
                        <input type="search" name="serch" placeholder="Phone number" class="bg-white border w-full h-10 px-5 pr-10 rounded-md text-sm focus:outline-none">
                    </div>
                </div>
                <div class="flex justify-between">
                    <div class="mt-4">
                        <button class="w-full border border-green-500 text-black px-16 py-2 rounded-full mr-2" on:click={closeModal}>Cancel</button>
                    </div>
                    <div class="mt-4">
                        <button class="bg-green-500  w-full text-white px-16 py-2 rounded-full mr-2" on:click={closeModal}>Save</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
{/if}


<style>
    .modal-background {
        background: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(4px);
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
  
    .modal-container {
        position: relative;
        z-index: 1;
        margin-left: 50%;
    }
</style>
