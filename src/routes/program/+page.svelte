<script lang="ts">
  import { LabeledInput, TextGradient } from "$lib/components";
  import { Checklist } from "$lib/icons";

  import type { ActionData } from "./$types";

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
</form>

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
  form button {
    padding: 0.5rem;
    border: 1px solid var(--border-color-gray);
    border-radius: 0.5rem;
    background-color: var(--color-bg);
    color: var(--color-text);
    font-size: var(--font-size-base);
  }
  form button.disabled {
    background-color: gray;
  }

  .top-spacing {
    margin-top: 2rem;
  }
</style>
