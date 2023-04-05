<script lang="ts">
  import { Icon, TextGradient } from "$lib/components";
  import type { ActionData } from "./$types";

  export let form: ActionData;
</script>

<svelte:head>
  <title>FA: Programs</title>
</svelte:head>

<h1><TextGradient>Programs</TextGradient> <Icon icon="checklist" /></h1>

<p>
  Welcome, this is a work-in-progress. If you have recieved a Program title and
  passcode from your coach, please enter it below to access your program.
</p>

{#if !form}
  <form method="POST">
    <label>
      Title: <input type="text" required name="title" id="title" />
    </label>

    <label>
      Passcode: <input type="passcode" required name="passcode" id="passcode" />
    </label>

    <button type="submit">Retrieve Program</button>
  </form>
{:else if form?.success}
  <h2>Success!</h2>

  <p>Message: {form.message}</p>
{:else if form?.error}
  <h2>Error!</h2>

  <p>Message: {form.error}</p>
{:else}
  <p>The fudge did you do? Everything is broken!</p>
{/if}
