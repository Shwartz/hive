<script>
  import { onMount } from "svelte";

  export let box;
  let container;
  onMount(() => {
    box(container);
  })
</script>

<section id="ourStars" class="large light mHeight" bind:this={container}>
  <div class="flex">
    <h2 class="center"><span class="brandTitle">Our Stars</span></h2>
    <div class="smol-flexbox-grid">
      <div>
        <h3>Digital Agency</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.</p>
      </div>
      <div>
        <h3>Global Presence</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.</p>
      </div>
      <div>
        <h3>One Team</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.</p>
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  .flex {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  h3 {
    font-family: var(--font-bold);
    font-size: clamp(1rem, 4vw + 1rem, 2rem);
  }
</style>
