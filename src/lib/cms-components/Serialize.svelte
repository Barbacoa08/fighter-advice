<script lang="ts">
  import type { PostContent } from "$types/PayloadPostTypes";
  import { SerializeBlock } from ".";

  export let content: PostContent[];
</script>

{#each content as block}
  <SerializeBlock {block} />
{/each}
