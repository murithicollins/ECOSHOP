<script>
  import Login from "$lib/components/Login/login .svelte";
  import { page } from "$app/stores";
  const business = $page.data.business.business;
</script>

<Login business={business.id} />
