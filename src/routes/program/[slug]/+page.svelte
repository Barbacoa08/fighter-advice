<script lang="ts">
  import { browser } from "$app/environment";
  import { Serialize } from "$lib/cms-components";
  import { TextGradient } from "$lib/components";
  import { Checklist } from "$lib/icons";
  import { copyTextToClipboard, formatDate } from "$lib/utils";
  import type { PageData } from "./$types";
  import { page } from "$app/stores";

  export let data: PageData;
  $: ({ accordions = [], content = [], title, updatedAt, id } = data);

  $: webShareAPISupported = browser && typeof navigator.share !== "undefined";

  $: pageUrl = `${$page.url.origin}/program/${id}`;

  $: handleWebShare;
  const handleWebShare = async () => {
    try {
      navigator.share({
        title: "Fighter Advice Program",
        text: title,
        url: pageUrl,
      });
    } catch (error) {
      webShareAPISupported = false;
    }
  };
</script>

<svelte:head>
  <title>FA: Programs</title>
</svelte:head>

<h1>
  <TextGradient>Programs</TextGradient>
  <Checklist fill="#da62c4" />
</h1>

{#if webShareAPISupported}
  <button on:click={handleWebShare}>
    <span class="screen-reader-text">Share</span>
  </button>
{:else}
  <p>no bueno</p>
{/if}

<h2>{title}</h2>
<p>Updated: {formatDate(updatedAt)}</p>

<Serialize {accordions} {content} />

{#if content}
  <p>
    Want to share this page? <button on:click={handleWebShare}>
      Click here
    </button>
  </p>
{/if}
