<script lang="ts">
  import { Serialize } from "$lib/cms-components";
  import { Icon, TextGradient } from "$lib/components";
  import type { PageData } from "./$types";

  export let data: PageData;
  $: ({
    post: { accordions = [], content = [], title, author },
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

  <Icon icon="word-bubble" /> by {author?.name}
</h1>

<Serialize {accordions} {content} />
