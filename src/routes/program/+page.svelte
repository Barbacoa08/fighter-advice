<script lang="ts">
  import { fade } from "svelte/transition";

  import { LabeledInput, TextGradient } from "$lib/components";
  import { Checklist } from "$lib/icons";

  import type { ActionData, PageData } from "./$types";

  export let data: PageData;
  $: ({ programs } = data);

  export let form: ActionData;
  let submitting = false;
</script>

<svelte:head>
  <title>FA: Programs</title>
</svelte:head>

<h1>
  <TextGradient>Programs</TextGradient>
  <Checklist fill="#da62c4" />
</h1>

{#if programs.length}
  <h3>Welcome back, here are the programs that you've recently visited:</h3>

  <ul>
    {#each programs as program}
      <li><a href={program.link}>{program.title}</a></li>
    {/each}
  </ul>
{/if}

<p>
  If you have recieved a Program title and passcode from your coach, enter it
  below to access your program.
</p>

<form method="POST">
  <LabeledInput name="title" type="text" required>Title:</LabeledInput>
  <LabeledInput name="passcode" type="password" required>
    Passcode:
  </LabeledInput>

  <button
    type="submit"
    class:disabled={submitting}
    on:click={() => (submitting = true)}
    on:formdata={() => (submitting = false)}
  >
    Retrieve Program
  </button>
  {#if submitting}
    <button type="button" transition:fade={{ duration: 200 }} disabled>
      Retrieving Program...
    </button>
  {/if}
</form>

{#if form?.error}
  <h2>Error!</h2>

  <p>Message: {form.error}</p>
{/if}

{#if programs.length < 2}
  <p class="top-spacing">
    If you'd like to see a Program example, enter the following:
  </p>

  <ul>
    <li>
      <b>Title</b>: One Punch Man, Saitama Workout
    </li>
    <li>
      <b>Passcode</b>: Saitama-is-my-hero
    </li>
  </ul>
{/if}

<style>
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  form button {
    padding: 0.5rem;
    border: 1px solid var(--border-color-gray);
    border-radius: 0.5rem;
    background-color: var(--color-bg);
    color: var(--color-text);
    font-size: var(--font-size-base);
  }
  form button:disabled {
    background-color: gray;
  }
  form button.disabled {
    display: none;
  }
  /* HACK: the above button weirdness is because I don't feel like putting effort
  into a "disable form while submitting". It's hacky for sure, but it works as expected
  and looks decent. Good enough. */

  .top-spacing {
    margin-top: 2rem;
  }
</style>
