<script lang="ts">
  // TODO: fix the `any` type
  export let block: any = {};
  const { text = "", bold, italic, strikethrough, underline } = block;
</script>

{#if bold}
  <strong>{text}</strong>
{:else if italic}
  <em>{text}</em>
{:else if strikethrough}
  <s>{text}</s>
{:else if underline}
  <u>{text}</u>
{:else}
  {text}
{/if}
