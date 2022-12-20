<script lang="ts">
  import { enhance } from "$app/forms";
  import { fade } from "svelte/transition";

  import type { FormResponse } from "./+page.server";

  export let form: FormResponse;

  const transitionFadeInOptions = {
    delay: 200,
    duration: 300,
    height: 0,
  };
  const transitionFadeOutOptions = {
    delay: 0,
    duration: 200,
    height: 0,
  };
</script>

<div class="fake-form-wrapper">
  <h2>Fake Form</h2>

  <form method="post" use:enhance>
    <label>Name <input required type="text" name="name" /></label>

    <label>Email <input required type="email" name="email" /></label>

    <label>Message <textarea required name="message" /></label>

    <button type="submit">Submit</button>
  </form>

  <div>
    <h3>Submission response:</h3>

    {#if form?.message}
      <p
        class="transition-element"
        in:fade={transitionFadeInOptions}
        out:fade={transitionFadeOutOptions}
      >
        {form?.message}
      </p>
    {:else}
      <p
        class="transition-element"
        in:fade={transitionFadeInOptions}
        out:fade={transitionFadeOutOptions}
      >
        &hellip;
      </p>
    {/if}
  </div>

  <p>Return <a href="/">home</a>?</p>
</div>

<style>
  div.fake-form-wrapper {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    max-width: 400px;
    margin: 0 auto;
  }

  h2 {
    margin: 0;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  label {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  button[type="submit"] {
    font-size: var(--font-size-base);
  }

  .transition-element {
    display: inline;
  }
</style>
