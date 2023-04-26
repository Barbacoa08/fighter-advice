<script lang="ts">
  import { page } from "$app/stores";
  import { Serialize } from "$lib/cms-components";
  import { Icon, Share, TextGradient } from "$lib/components";
  import { formatDate } from "$lib/utils";

  import type { PageData } from "./$types";

  export let data: PageData;
  $: ({
    topic: { accordions = [], content = [], title = "", icon, updatedAt, slug },
  } = data);
  $: url = `${$page.url.origin}/topic/${slug}`;
</script>

<svelte:head>
  <title>FA: {title}</title>
  <meta name="description" content={`barbajoe's Fighter Advice on ${title}`} />
</svelte:head>

<h1 class="title">
  <TextGradient>
    {title}
  </TextGradient>

  <Icon icon={icon?.value} />
</h1>
<p class="sub-title">
  <span>Updated: {formatDate(updatedAt)}</span>
  <span><Share {title} {url} /></span>
</p>

<Serialize {accordions} {content} />

<style>
  .title {
    margin-bottom: 0;
    border-bottom: 1px solid var(--border-color-gray);
  }

  .sub-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.5rem;
    margin-bottom: 2rem;
  }
</style>
