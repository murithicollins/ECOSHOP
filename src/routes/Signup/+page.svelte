<script>
  import { Signup } from "$lib/components";
  import { page } from "$app/stores";
  const business = $page.data.business.business;
</script>

<Signup business={business.id} />
