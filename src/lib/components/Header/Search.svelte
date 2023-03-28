<script lang="ts">
  import { onMount } from "svelte";
  import Search from "svelte-search";

  import { Modal } from "$lib/components";
  import type { TermsResult } from "$types/SearchAPI";

  let showModal = false;
  let value = "";
  let terms: TermsResult[] = [];

  // pull search terms post initial render to avoid blocking
  onMount(async () => {
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
            term.tags.includes(value.toLowerCase())
        );
</script>

<button on:click={() => (showModal = true)}>Search</button>

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
    border: none;
    cursor: pointer;
    font-size: 1rem;
    padding: 0;
  }
</style>
