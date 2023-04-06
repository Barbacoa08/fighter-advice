<script lang="ts">
  export let type: "text" | "password";
  export let id: string = Math.random().toString(36).slice(-6);
  export let name: string = id;
</script>

<label for={id}><slot /></label>
<input {type} {id} {name} {...$$restProps} />

<style>
  label {
    font-size: var(--font-size-base);
  }
  input {
    padding: 0.5rem;
    border: 1px solid var(--color-bg);
    border-radius: 0.5rem;
    font-size: var(--font-size-base);
  }
</style>
