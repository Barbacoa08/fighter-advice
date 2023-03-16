<script lang="ts">
  import { Serialize } from "$lib/cms-components";
  import { Icon, TextGradient } from "$lib/components";
  import { formatDate } from "$lib/utils/formatDate";
  import type { PageData } from "./$types";

  export let data: PageData;
  $: ({
    topic: { accordions = [], content = [], title, icon, updatedAt },
  } = data);
</script>

<svelte:head>
  <title>FA: {title}</title>
  <meta name="description" content={`barbajoe's Fighter Advice on ${title}`} />
</svelte:head>

<h1>
  <TextGradient>
    {title}
  </TextGradient>

  <Icon icon={icon?.value} />

  <span class="h1-subtitle">last updated: {formatDate(updatedAt)}</span>
</h1>

<Serialize {accordions} {content} />

<style>
  h1 span {
    font-size: var(--font-size-base);
    font-weight: normal;
    vertical-align: middle;
  }
  h1 span::before {
    content: "— ";
  }
</style>
