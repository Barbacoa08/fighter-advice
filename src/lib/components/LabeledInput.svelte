<script lang="ts">
  import { EyeOff, EyeOpen } from "$lib/icons";

  export let id: string = Math.random().toString(36).slice(-6);
  export let name: string = id;
  export let type: "text" | "password";

  $: inputType = type;
  const handleVisibilityToggle = () => {
    inputType = inputType === "password" ? "text" : "password";
  };
</script>

<label for={id}><slot /></label>

<div class="wrapper">
  <input type={inputType} {id} {name} {...$$restProps} />

  {#if type === "password"}
    <button
      type="button"
      aria-label="toggle text visibility"
      on:click={handleVisibilityToggle}
    >
      {#if inputType === "password"}
        <EyeOff />
      {:else}
        <EyeOpen />
      {/if}
    </button>
  {/if}
</div>

<style>
  label {
    font-size: var(--font-size-base);
  }
  input {
    width: -webkit-fill-available;
    padding: 0.5rem;
    border: 1px solid var(--color-bg);
    border-radius: 0.5rem;
    font-size: var(--font-size-base);
  }

  div.wrapper {
    position: relative;
  }
  div.wrapper input + button {
    background-color: transparent;
    border: none;

    position: absolute;
    right: 0.4rem;
    top: 0.4rem;
    cursor: pointer;
  }
</style>
