<script>

   
    const items = [
    {
        id: '1',
        image: 'https://i.insider.com/5fca9503b6a3a800199b6bdd?width=700',
        name: 'Brand Name',
        qty: '3',
        price: 'KES 404000'
    },
    {
        id: '2',
        image: 'https://i.insider.com/5fca9503b6a3a800199b6bdd?width=700',
        name: 'Brand Name',
        qty: '3',
        price: 'KES 404000'
    },
]

function removeItem(itemId) {
    
        const index = items.findIndex(item => item.id === itemId);

        
        if (index !== -1) {
            items.splice(index, 1); 
        }
    }

const total = items.reduce((acc, item) => {
        const price = parseFloat(item.price.replace(/[^0-9.]/g, ''));
        return acc + price;
    }, 0);
</script>
        
        <div class="bg-white md:p-6 flex flex-col gap-6 w-full">
            <div>
                <h1 class="text-lg font-bold mx-6">Your Items</h1>
            </div>
            {#each items as item (item.id) }
                <div class="flex flex-col justify-center">
                    <div class="border flex md:flex-row md:space-x-5 md:space-y-0 mx-auto p-3 relative rounded-lg w-full">
                        <div class=" md:w-24 p-2 ">
                            <img src={item.image} alt="item" class="border rounded-md md:w-20 h-20" />
                        </div>
                        <div class="w-full md:w-2/3  flex flex-col space-y-4 p-3">
                            <div class="flex justify-between item-center">
                                <p class="text-gray-500 font-medium ">{item.name}</p>
                                <div class="px-3 py-1 rounded-full text-xs font-medium text-gray-800 ">Qty:{item.qty}</div>
                            </div>
                            <div class="flex justify-between mt-2 ">
                                <p class="text-[12px] md:text-xl md:font-bold text-gray-800">
                                    {item.price}
                                </p>
                                <h1 class="underline underline-offset-2  my-1">Remove</h1>
                            </div>
                        </div>
                    </div>
                </div>
            {/each}
            
            <div class="flex justify-between mx-8">
                <h1>Total</h1>
                <p>Ksh {total.toFixed(2)}</p>
            </div>
        </div> 