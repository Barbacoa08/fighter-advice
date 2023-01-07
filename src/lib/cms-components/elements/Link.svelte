<script lang="ts">
  import { Link } from "$lib/components";
  import { Serialize } from "..";

  // TODO: fix the `any` type
  export let block: any = {};
  const { children, url, newTab } = block;
  // TODO: add `aria-label` to payload "link" type
</script>

<Link isExternal={newTab === true} href={url}>
  <Serialize content={children} />

  <slot />
</Link>
