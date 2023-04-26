<button {...$$restProps}>
  <slot />
</button>

<style>
  button {
    background: none;
    color: var(--color-text);
    border: none;
    cursor: pointer;
    padding: 0;
  }
</style>
