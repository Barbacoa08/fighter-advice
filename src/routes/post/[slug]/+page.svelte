<script lang="ts">
  import { Serialize } from "$lib/cms-components";
  import { Icon, TextGradient } from "$lib/components";
  import { formatDate } from "$lib/utils";

  import type { PageData } from "./$types";

  export let data: PageData;
  $: ({
    post: { accordions = [], content = [], title, author, publishedDate },
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

  <span>posted on: {formatDate(publishedDate)}</span>
</h1>

<Serialize {accordions} {content} />

<style>
  h1 span {
    font-size: var(--font-size-base);
    font-weight: normal;
    display: flex;
    justify-content: flex-end;
  }
</style>
