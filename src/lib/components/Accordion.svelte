<script lang="ts">
  let active = false;
  const toggle = () => {
    active = !active;
  };
</script>

<div class="accordion">
  <button class="accordion-header" class:active on:click={toggle}>
    <slot name="header">Header</slot>
  </button>

  <div class="accordion-panel" class:active>
    <slot />
  </div>
</div>

<style>
  .accordion {
    border: 1px solid var(--border-color-gray);
    border-radius: 4px;
    margin-bottom: 1rem;
  }

  .accordion-header {
    width: 100%;
    cursor: pointer;
    padding: 1rem;
    font-size: var(--font-size-base);
    text-align: left;
    border: none;
    transition: 0.4s;
  }

  .active.accordion-header,
  .accordion-header:hover {
    background-color: var(--border-color-gray);
  }

  .accordion-panel {
    padding: 1rem;
    display: none;
    overflow: hidden;
  }

  .active.accordion-panel {
    display: block;
  }

  :global(.accordion .accordion-panel *:first-child) {
    margin-top: 0;
  }
  :global(.accordion .accordion-panel *:last-child) {
    margin-bottom: 0;
  }
</style>
