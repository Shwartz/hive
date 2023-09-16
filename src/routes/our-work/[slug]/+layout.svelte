<script>
  import "../../styles.css";
  import { base } from "$app/paths";
</script>

<div class="app">
  <section>
    <header>
      Back to <a href="{base}/our-work">Our Work</a>
    </header>
  </section>
  <main>
    <section>
      <slot />
    </section>
  </main>
</div>

<style>
    .app {
        max-width: 800px;
        margin: auto;
    }
</style>
