<script lang="ts">
  import type { PostContent } from "$types/PayloadPostTypes";
  import { Serialize } from "./";
  import { Link, Text } from "./elements";

  export let block: PostContent;

  if (!block || (!block.type && !block.text)) {
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
