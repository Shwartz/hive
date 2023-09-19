<script>
  import "./styles.css";
  import { fly } from "svelte/transition";

  export let data;
</script>

<div class="app">
  <main>
    {#key data.url}
      <div
        in:fly={{ y: -200, duration: 300, delay: 300 }}
        out:fly={{ y: 200, duration: 300 }}
      >
        <slot />
      </div>
    {/key}
  </main>
</div>

<style lang="scss">
  /* Most of the globals are in styles.css but layout is here
  since I like SCSS */

  /* Layout */
  :global(.smol-flexbox-grid) {
    --min: 31ch;
    --gap: 2rem;

    @media (min-width: 1000px) {
      --gap: 4em;
    }

    @media (min-width: 1400px) {
      --gap: 6em;
    }

    display: flex;
    flex-wrap: wrap;
    gap: var(--gap);

    margin-top: 4rem;

    & :global(> *) {
      flex: 1 1 var(--min);
      text-align: center;
    }
  }
</style>
