<script>
  import Header from "./Header.svelte";
  import Footer from "./Footer.svelte";

  import "./global.css";
</script>

<div class="body-main-wrapper">
  <Header />

  <main>
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
    margin: auto;
    padding: 1em;
    max-width: 60ch;
  }
</style>
