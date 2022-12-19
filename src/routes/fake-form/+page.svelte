<script lang="ts">
  import { enhance } from "$app/forms";
  import type { FormResponse } from "./+page.server";

  export let form: FormResponse;

  $: console.info("form", form);
</script>

<div class="fake-form-wrapper">
  <h2>Fake Form</h2>

  <div>
    <h3 class="submission-repsonse">Submission repsonse:</h3>

    <p class="transition">
      {#if form?.message}
        {form.message}
      {:else}
        &nbsp;
      {/if}
    </p>
  </div>

  <form method="post" use:enhance>
    <label>Name <input required type="text" name="name" /></label>

    <label>Email <input required type="email" name="email" /></label>

    <label>Message <textarea required name="message" /></label>

    <button type="submit">Submit</button>
  </form>

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

  .submission-repsonse {
    font-weight: bold;
  }
</style>
