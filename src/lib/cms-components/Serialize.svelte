<script lang="ts">
  import { H2 } from "./elements";

  // TODO: fix the `any` type
  export let content: any[];
</script>

{#each content as block}
  {#if block.type === "h2"}
    <H2 children={block.children} />
  {/if}
{/each}
