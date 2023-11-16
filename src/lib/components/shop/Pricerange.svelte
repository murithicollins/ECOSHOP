<script>
  import { onMount } from "svelte";
  let price = 150;

  const updatePrice = (e) => {
    price = +e.target.value;
  };

  onMount(() => {
    // Add any initialization or side effects here
  });
</script>

<div class="  font-semibold text-xl p-4">Price: ${price}</div>
<div class="m-2 rounded-xl bg-white py-3 text-sm">
  <div class="p-4 flex text-lg font-semibold justify-between">
    <h1>0</h1>
    <h1>1000</h1>
  </div>
  <input
    class="w-full"
    type="range"
    bind:value={price}
    min="0"
    max="1000"
    step="1"
    on:input={updatePrice}
  />
</div>

<style>
  input[type="range"] {
    width: 100%;
    padding: 5px;
    border-radius: 5px;
    -webkit-appearance: none; /* Remove default styling in WebKit browsers */
  }

  input[type="range"]:focus {
    outline: none; /* Remove focus outline */
  }

  input[type="range"]::-webkit-slider-runnable-track {
    width: 100%;
    height: 8px;
    cursor: pointer;
    background: #ffddc1;
    border-radius: 5px;
  }

  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none; /* Remove default styling in WebKit browsers */
    width: 20px;
    height: 20px;
    cursor: pointer;
    background: #fb923c;
    border-radius: 50%;
    margin-top: -6px; /* Center the thumb vertically */
  }

  input[type="range"]::-moz-range-track {
    width: 100%;
    height: 8px;
    cursor: pointer;
    background: #ddd;
    border-radius: 5px;
  }

  input[type="range"]::-moz-range-thumb {
    width: 20px;
    height: 20px;
    cursor: pointer;
    background: #fb923c;
    border-radius: 50%;
  }

  input[type="range"]::-ms-track {
    width: 100%;
    height: 8px;
    cursor: pointer;
    background: #ddd;
    border-radius: 5px;
  }

  input[type="range"]::-ms-fill-lower {
    background: #ddd;
    border-radius: 5px;
  }

  input[type="range"]::-ms-fill-upper {
    background: #ddd;
    border-radius: 5px;
  }

  input[type="range"]::-ms-thumb {
    width: 20px;
    height: 20px;
    cursor: pointer;
    background: #fb923c;
    border-radius: 50%;
    margin-top: 0px; /* Center the thumb vertically */
  }
</style>
