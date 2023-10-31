<script>
  import { Ruler } from "$lib/components";
  import { categories, getCategories } from "../../../store/categories";
  import { onMount } from "svelte";

  onMount(() => {
    getCategories();
  });
  let Categories = [
    {
      image:
        "https://advancedbuilders.co.ke/wp-content/uploads/2020/09/TANKS-1-1.jpg",
      title: "Water Tanks",
    },
    {
      image:
        "https://d2csxpduxe849s.cloudfront.net/media/2952086A-80D6-4590-85C8404E6BC2EBFC/A92CAB19-D31B-4DD9-A89E20D67D209004/High%20Res%20Zoom-27426.jpg",
      title: "Seasonal Summer",
    },
    {
      image:
        "https://cdn-tp3.mozu.com/24645-37138/cms/37138/files/787c02f4-6565-47f5-87d7-39e7f00f91ba?quality=50",
      title: "Power Tools",
    },
    {
      image:
        "https://media.istockphoto.com/id/185568132/photo/outdoor-shot-of-garden-equipment.jpg?s=612x612&w=0&k=20&c=lbVrk5n0QKttg3o-dObaBRHAPOXdaFCr4W8zFOnSt-g=",
      title: "Garden",
    },
    {
      image:
        "https://www.superhome.com.cy/Admin/Public/GetImage.ashx?width=300&height=300&crop=5&Compression=75&FillCanvas=true&DoNotUpscale=true&image=%2FFiles%2FImages%2FEcom%2FProducts%2F0220199.jpg",
      title: "Outdoors",
    },
  ];
</script>

<Ruler>
  <div class="my-4">
    <h1 class="font-bold text-lg">Popular Categories</h1>
  </div>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
  >
    <!-- {#each $categories as cat}
      <p>
        {cat.attributes.categoryName}
      </p>
    {/each} -->
    {#each Categories as category (category.title)}
      <div class="flex flex-col items-center">
        <div
          class="bg-blue-200 p-16 w-20 h-20 rounded-full relative flex items-center justify-center"
        >
          <img
            src={category.image}
            alt="Centered Image"
            class="w-14 h-14 absolute"
          />
        </div>
        <div class="my-4">
          <h1 class="font-bold text-lg">{category.title}</h1>
        </div>
      </div>
    {/each}
  </div>
</Ruler>
