<script>
  import { Ruler,Sidebar } from "$lib/components";
</script>

<div class="">
  <Ruler>
    <div class="flex">
      <div class="hidden md:block">
        <Sidebar/>
      </div>
      <slot />
    </div>
  </Ruler>
</div>
