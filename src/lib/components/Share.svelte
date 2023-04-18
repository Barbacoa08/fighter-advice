<script lang="ts">
  import { browser } from "$app/environment";
  import { copyTextToClipboard, formatDate } from "$lib/utils";

  export let title: string;
  export let url: string;

  $: webShareAPISupported =
    browser &&
    typeof navigator.share !== "undefined" &&
    typeof navigator.canShare !== "undefined";

  $: handleWebShare;
  const handleWebShare = async () => {
    if (webShareAPISupported) {
      navigator.share({
        title: "Fighter Advice Program",
        text: title,
        url,
      });
    } else {
      copyTextToClipboard(url);
    }
  };
</script>

{#if webShareAPISupported}
  <button on:click={handleWebShare}>Share</button>
{:else}
  <button on:click={handleWebShare}>Copy URL to Clipboard</button>
{/if}
