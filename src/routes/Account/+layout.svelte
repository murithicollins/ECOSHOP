<script>
    import { Sidebar,Ruler } from "$lib/components"
</script>

<div class="mt-24">
    <Ruler>
        <Sidebar/>
    
        <slot/>
    </Ruler>
</div>

