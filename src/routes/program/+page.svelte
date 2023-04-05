<script lang="ts">
  import { Serialize } from "$lib/cms-components";
  import { Icon, TextGradient } from "$lib/components";
  import { formatDate } from "$lib/utils";

  import type { ActionData } from "./$types";

  export const empty = {
    accordions: [],
    content: [],
    title: "",
    updatedAt: "",
  };

  export let form: ActionData;
  $: ({
    accordions = [],
    content = [],
    title,
    updatedAt,
  } = form?.program || empty);
</script>

<svelte:head>
  <title>FA: Programs</title>
</svelte:head>

<h1><TextGradient>Programs</TextGradient> <Icon icon="checklist" /></h1>

{#if !form || !form.success}
  <p>
    If you have recieved a Program title and passcode from your coach, enter it
    below to access your program.
  </p>

  <form method="POST">
    <label for="title">Title:</label>
    <input id="title" name="title" type="text" required />

    <label for="passcode">Passcode:</label>
    <input id="passcode" name="passcode" type="password" required />

    <button type="submit">Retrieve Program</button>
  </form>
{:else if form?.success && content.length}
  <h2>{title}, updated at: {formatDate(updatedAt)}</h2>

  <Serialize {accordions} {content} />
{/if}

{#if form?.error}
  <h2>Error!</h2>

  <p>Message: {form.error}</p>
{/if}

<style>
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  form label {
    font-size: var(--font-size-base);
  }
  form input {
    padding: 0.5rem;
    border: 1px solid var(--color-bg);
    border-radius: 0.5rem;
    font-size: var(--font-size-base);
  }
  form button {
    padding: 0.5rem;
    border: 1px solid var(--border-color-gray);
    border-radius: 0.5rem;
    background-color: var(--color-bg);
    color: var(--color-text);
    font-size: var(--font-size-base);
  }
</style>
