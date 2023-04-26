<script lang="ts">
  import { page } from "$app/stores";
  import { Serialize } from "$lib/cms-components";
  import { Share, TextGradient } from "$lib/components";
  import { Checklist } from "$lib/icons";
  import { formatDate } from "$lib/utils";
  import type { PageData } from "./$types";

  export let data: PageData;
  $: ({ accordions = [], content = [], title, updatedAt, id } = data);

  $: url = `${$page.url.origin}/program/${id}`;
</script>

<svelte:head>
  <title>FA: Programs</title>
</svelte:head>

<h1>
  <TextGradient>Programs</TextGradient>
  <Checklist fill="#da62c4" />
</h1>

<h2 class="title">{title}</h2>
<p class="sub-title">
  <span>Updated: {formatDate(updatedAt)}</span>
  <span><Share {title} {url} /></span>
</p>

<Serialize {accordions} {content} />

{#if content}
  <p class="share-section">
    Want to share this program? <Share {title} {url} />
  </p>
{/if}

<style>
  .title {
    margin-bottom: 0;
  }

  .sub-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.5rem;
    margin-bottom: 2rem;
  }

  .share-section {
    margin-top: 5rem;
    margin-bottom: 0;
    text-align: right;
  }
</style>
