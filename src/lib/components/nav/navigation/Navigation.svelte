<script>
    import { TopNav,Sidebar } from "$lib/components";

    let open = false
</script>

<Sidebar bind:open/>
<TopNav bind:sidebar={open}/>