<script>
  import "./global.css";
</script>

<header>
  <h1 class="text-gradient">Fighter Advice</h1>
</header>

<main>
  <slot />
</main>

<footer>&forall; by <code>barbajoe</code></footer>

<style>
  :root {
    --font-size-base: clamp(1rem, 0.34vw + 0.91rem, 1.19rem);
    --font-size-lg: clamp(1.2rem, 0.7vw + 1.2rem, 1.5rem);
    --font-size-xl: clamp(1.44rem, 1vw + 1.6rem, 2rem);

    --image-gradient: linear-gradient(0deg, #4f39fa, #da62c4);
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --color-text: hsl(0, 100%, 95%);
      --color-bg: hsl(198, 100%, 11%);
      --color-border: hsl(17, 76%, 10%);
    }
  }

  @media (prefers-color-scheme: light) {
    :root {
      --color-text: hsl(12, 5%, 4%);
      --color-bg: hsl(10, 21%, 95%);
      --color-border: hsl(17, 24%, 90%);
    }
  }

  header h1 {
    margin-bottom: 0;
    text-align: center;
  }

  main {
    margin: auto;
    padding: 1em;
    max-width: 60ch;
  }

  footer {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
  }

  .text-gradient {
    font-weight: 900;
    background-image: var(--image-gradient);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 100% 200%;
    background-position-y: 100%;
    border-radius: 0.4rem;
    animation: pulse 4s ease-in-out infinite;
  }

  @keyframes pulse {
    0%,
    100% {
      background-position-y: 0%;
    }
    50% {
      background-position-y: 80%;
    }
  }
</style>
