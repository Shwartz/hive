<script>
  import { base } from "$app/paths";
  import { onMount } from "svelte";

  export let box;
  let container;
  onMount(() => {
    box(container);
  })
</script>

<section id="ourWork" class="large white mHeight" bind:this={container}>
  <div class="wrap">
    <div class="text">
      <h2><span class="brandTitle">Our Work</span></h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.</p>
      <a class="btn-forward" href="{base}/our-work">See our work</a>
    </div>
  </div>
</section>

<style lang="scss">
  section {
    .wrap {
      display: flex;
      align-items: center;
      width: 100%;


      @media (min-width: 800px) {
        background: url('/images/ipad2-big.png') no-repeat 100% 100%;
        background-size: 50%;
      }

      @media (min-width: 1000px) {
        background-position-x: 110%;
        background-size: 60%;
      }

      @media (min-width: 1300px) {
        background-position-x: 120%;
        background-size: auto;
      }
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
