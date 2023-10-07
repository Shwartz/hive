<script>
  import { base } from "$app/paths";
  import { onMount } from "svelte";

  export let box;
  let container;
  onMount(() => {
    box(container);
  })
</script>

<section id="whatElse" class="large white mHeight" bind:this={container}>
  <div class="wrap">
    <div class="text">
      <h2><span class="brandTitle">What Else?</span></h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.</p>
      <a href="{base}/our-work">See our work</a>
    </div>
  </div>
</section>

<style lang="scss">
  section {

    @media (min-width: 800px) {
      background: url('/images/phones.png') no-repeat 210% 100%;
      background-size: 80%;
    }

    @media (min-width: 1000px) {
      background: url('/images/phones.png') no-repeat 105% 100%;
      background-size: 70%;
    }

    @media (min-width: 1300px) {
      background: url('/images/phones.png') no-repeat 100% 100%;
      background-size: 800px;
    }

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
