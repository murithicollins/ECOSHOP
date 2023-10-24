<script>
    import "../app.css";
    import { TopNav } from "$lib/components"
    import { SecondNav } from "$lib/components";
    </script>
    
    <div class="app">
    
        <TopNav/>
        <SecondNav/>
    
        <slot />
    
    </div>
    
    <style>
    
    </style>