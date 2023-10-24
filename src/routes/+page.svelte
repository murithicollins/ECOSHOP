<script>
    // redirect to /main
    import { goto } from '$app/navigation';
    import { onMount } from 'svelte';

   

    //onmount
    onMount(() => {
        goto('/Home');
    })


</script>