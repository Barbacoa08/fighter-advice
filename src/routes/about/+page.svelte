<script lang="ts">
  import { Link, TextGradient } from "$lib/components";
</script>

<svelte:head>
  <title>FA: About</title>
  <meta name="description" content="barbajoe's Fighter Advice About page" />
</svelte:head>

<h1>About <TextGradient>Fighter Advice</TextGradient></h1>

<p>
  As a Nak Muay, there are a <strong>ton</strong> or amazing resources out there!
  But I've found it difficult to keep all of those resources organized and easy to
  access. So I decided to create Fighter Advice as a central place to store all of
  my favorite resources and share my own findings.
</p>

<p>I hope you find Fighter Advice useful!</p>

<p>
  If you'd like to make a request or describe a bug, please <Link
    href="https://github.com/Barbacoa08/fighter-advice/issues"
    isExternal
  >
    visit this link
  </Link> and click "New Issue".
</p>

<p>
  You can also <Link isExternal href="https://discord.gg/V3HhJkP7mG">
    join the Fighter Advice Discord
  </Link> if you'd like to talk to me or other users. If the invite link is expired,
  please <Link
    href="https://github.com/Barbacoa08/fighter-advice/issues"
    isExternal
  >
    create an issue
  </Link>.
</p>
