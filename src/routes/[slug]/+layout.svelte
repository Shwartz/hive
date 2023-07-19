<script>
  import './../styles.css';
  import { base } from "$app/paths";
</script>

<div class="app">
    <header>
        Back to <a href="{base}/">Home</a>
    </header>
    <main>
        <slot />
    </main>
</div>

<style>
</style>
