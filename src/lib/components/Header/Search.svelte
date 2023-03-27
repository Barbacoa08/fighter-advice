<script lang="ts">
  import { Modal } from "$lib/components";
  let showModal = false;
</script>

<button on:click={() => (showModal = true)}>Search</button>

<Modal bind:showModal>
  <h2 slot="header">modal</h2>

  <ol class="definition-list">
    <li>of or relating to modality in logic</li>
    <li>
      containing provisions as to the mode of procedure or the manner of taking
      effect —used of a contract or legacy
    </li>
    <li>of or relating to a musical mode</li>
    <li>of or relating to structure as opposed to substance</li>
    <li>
      of, relating to, or constituting a grammatical form or category
      characteristically indicating predication
    </li>
    <li>of or relating to a statistical mode</li>
  </ol>

  <a href="https://www.merriam-webster.com/dictionary/modal">
    merriam-webster.com
  </a>
</Modal>

<style>
  h2 {
    margin-top: 0;
  }

  button {
    color: var(--color-link-text);
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    padding: 0;
  }
</style>
