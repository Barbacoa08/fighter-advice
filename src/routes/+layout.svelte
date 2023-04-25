<script lang="ts">
  import { SvelteToast } from "@zerodevx/svelte-toast";

  import { Footer, Header } from "$lib/components";

  import "./global.css";

  const options = {
    duration: 2000,
  };
</script>

<div class="body-main-wrapper">
  <Header />

  <main id="main-content">
    <slot />
  </main>

  <Footer />
</div>

<SvelteToast {options} />

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
