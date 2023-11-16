<script>
  import { Ruler,Sidebar } from "$lib/components";
</script>

<div class="">
  <Ruler>
    <div class="flex">
      <Sidebar/>
      <slot />
    </div>
  </Ruler>
</div>
