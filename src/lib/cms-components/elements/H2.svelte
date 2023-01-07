<script lang="ts">
  import { Serialize } from "..";

  // TODO: fix the `any` type
  export let children: any[] = [];
</script>

<h2>
  {#each children as child}
    {#if child.text}
      {child.text}
    {:else if !!child.type}
      <Serialize content={child} />
    {:else}
      <p>Unknown Child: {JSON.stringify(child)}</p>
    {/if}
  {/each}

  <slot />
</h2>
