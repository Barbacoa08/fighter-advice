<script lang="ts">
  import { Serialize } from "$lib/cms-components";
  import { Icon } from "$lib/components";
  import type { PageData } from "./$types";

  export let data: PageData;
  $: ({
    topic: { accordions = [], content = [], title, icon },
  } = data);
</script>

<svelte:head>
  <title>FA: {title}</title>
  <meta name="description" content={`barbajoe's Fighter Advice on ${title}`} />
</svelte:head>

<h1>{title} <Icon icon={icon?.value} /></h1>

<Serialize {accordions} {content} />
