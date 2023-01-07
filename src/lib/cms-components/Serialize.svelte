<script lang="ts">
  import { SerializeBlock } from ".";

  // TODO: fix the `any` type
  export let content: any[];
</script>

{#each content as block}
  <SerializeBlock {block} />
{/each}
