<script lang="ts">
  import { Accordion } from "$lib/components";
  import AccordionItem from "$lib/components/Accordion/AccordionItem.svelte";
  import type { Post } from "$types/payload-types";
  import type { PostContent } from "$types/PayloadPostTypes";

  import { SerializeBlock } from ".";
  import { CMSAccordion } from "./elements";

  export let accordions: Post["accordions"] = [];
  export let content: PostContent[];
</script>

{#each content as block}
  <SerializeBlock {block} />
{/each}

{#if accordions && accordions.length}
  <CMSAccordion {accordions} />
{/if}
