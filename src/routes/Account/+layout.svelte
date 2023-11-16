<script>
  import { goto } from "$app/navigation";
  import { Ruler, Sidebar } from "$lib/components";
  const token = sessionStorage.getItem("access_token");
  console.log(token);
  if (token === null) goto("/Login");
</script>

<div class="">
  <Ruler>
    <div class="flex gap-11 pt-52">
      <Sidebar />
      <slot />
    </div>
  </Ruler>
</div>
