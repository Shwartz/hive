<script>
  import { onMount } from "svelte";

  export let box;
  let container;
  onMount(() => {
    box(container);
  })
</script>

<section id="contactUs" class="large white mHeight" bind:this={container}>
  <div class="wrap">
    <div class="text">
      <h2><span class="brandTitle">Contact Us</span></h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.</p>
      <a href="#">See our work</a>
    </div>
  </div>
</section>

<style lang="scss">
  section {
    min-height: 100vh;
    .wrap {
      display: flex;
      align-items: center;
      width: 100%;
    }

    .text {
      max-width: 500px;
    }

    a {
      display: inline-block;
      margin-top: 1rem;
    }
  }
</style>
