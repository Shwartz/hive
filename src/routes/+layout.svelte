<script>
  import { base } from "$app/paths";
  import "./styles.css";
  import { fly } from "svelte/transition";

  export let data;
</script>

<div class="app">
  <main>
    <div class="nav-placeholder">
      <div>
        <a href="{base}/">
          <img src="{base}/images/avanade-logo-color.svg" alt="Avanade Logo">
        </a>
      </div>
    </div>
    {#key data.url}
      <div
        in:fly={{ x: 200, duration: 300, delay: 300 }}
        out:fly={{ x: -200, duration: 300 }}
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

  .nav-placeholder {
    padding: 8px;
    background: var(--cWhite);
    margin-bottom: 24px;
    box-shadow: 0 1px 12px rgba(0,0,0,0.2);
    border-bottom: 0.5px solid white;

    > div {
      display: flex;
      max-width: 1200px;
      margin: auto;
    }

    a {
      padding: 8px;
    }
  }
</style>
