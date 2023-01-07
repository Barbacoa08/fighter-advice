<script lang="ts">
  import { Serialize } from "./";
  import { Link, Text } from "./elements";

  // TODO: fix the `any` type
  export let block: any;

  if (!block || (!block.type && !block.children && !block.text)) {
    console.error(
      "SerializeBlock.svelte: `block` is undefined or missing all valid props:",
      block
    );
  }
</script>

{#if !!block.text || block.text === ""}
  <Text {block} />
{:else if !block.type && block.children.length > 0}
  <Serialize content={block.children} />
{:else if block.type === "h2"}
  <h2><Serialize content={block.children} /></h2>
{:else if block.type === "p"}
  <p><Serialize content={block.children} /></p>
{:else if block.type === "link"}
  <Link {block} />
{:else}
  <div>Unknown/Invalid block type: {block.type}</div>
{/if}
