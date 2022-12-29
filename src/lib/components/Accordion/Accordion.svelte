<script lang="ts">
  const id = Math.random().toString(36).substring(2, 9);
</script>

<div {id}>
  <slot name="header" />
</div>

<ul aria-labelledby={id}>
  <slot />
</ul>

<style>
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
</style>
