<script lang="ts">
  import { onMount } from "svelte";
  import Search from "svelte-search";

  import { Modal } from "$lib/components";
  import type { TermsResult } from "$types/SearchAPI";

  let showModal = false;
  let value = "";
  let terms: TermsResult[] = [];

  let prevKey = "";
  const handleKeydown = (event: { key: string }) => {
    if (showModal) return;

    if (event.key === "k" && (prevKey === "Control" || prevKey === "Meta")) {
      showModal = true;
      prevKey = "";
    } else {
      prevKey = event.key;
    }
  };

  let osKey = " ";
  onMount(async () => {
    osKey = navigator.userAgent.includes("Mac") ? "⌘" : "CTRL";

    // pull search terms after initial render to avoid blocking
    const response = await fetch("/search", {
      headers: {
        "content-type": "application/json",
      },
    });
    terms = await response.json();
  });
  $: matches =
    value.length === 0
      ? []
      : terms.filter(
          (term) =>
            term.title.toLowerCase().includes(value.toLowerCase()) ||
            term.tags.filter((tag) =>
              tag.toLowerCase().includes(value.toLowerCase())
            ).length
        );
</script>

<svelte:window on:keydown={handleKeydown} />

<button aria-label="Search" on:click={() => (showModal = true)}>
  {osKey} K
</button>

<Modal bind:showModal>
  <h2 slot="header">Topic + Post Search</h2>

  <Search autofocus label="Search Titles and Tags" bind:value />

  <ul>
    {#each matches as match}
      <li>{match.title}</li>
    {/each}

    {#if value.length && !matches.length}
      <li>No results</li>
    {:else if !value.length}
      <li>Enter a search</li>
    {/if}
  </ul>
</Modal>

<style>
  h2 {
    margin-top: 0;
  }

  button {
    color: var(--color-link-text);
    background: none;
    border: 1px solid var(--color-link-text);
    cursor: pointer;
    padding: 0.3rem 0.5rem;
    border-radius: 0.5rem;
  }
  button::before {
    content: "🔍";
    margin-right: 0.5rem;
  }
</style>
