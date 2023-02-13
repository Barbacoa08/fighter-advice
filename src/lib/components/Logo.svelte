<script lang="ts">
  import logoBlack from "$lib/assets/mongkong-logo-black.webp";
  import logoWhite from "$lib/assets/mongkong-logo-white.webp";
</script>

<picture>
  <source media="(prefers-color-scheme: dark)" srcset={logoWhite} />
  <img width="50" height="50" src={logoBlack} alt="Mongkong Logo" />
</picture>
