<script lang="ts">
  import logoBlack from "$lib/assets/mongkong-logo-black.webp";
  import logoWhite from "$lib/assets/mongkong-logo-white.webp";

  export let width = 50;
</script>

<picture>
  <source media="(prefers-color-scheme: dark)" srcset={logoWhite} />
  <img {width} src={logoBlack} alt="Mongkong Logo" />
</picture>
