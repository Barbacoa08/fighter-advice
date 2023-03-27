<script lang="ts">
  import { Footer, Header } from "$lib/components";

  import "./global.css";
</script>

<div class="body-main-wrapper">
  <Header />

  <main id="main-content">
    <slot />
  </main>

  <Footer />
</div>

<style>
  .body-main-wrapper {
    min-height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr auto;
  }

  main {
    margin: 1rem auto;
    width: clamp(400px, 80%, 60ch);
  }
</style>
