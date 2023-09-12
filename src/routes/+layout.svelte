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

<style>
</style>
