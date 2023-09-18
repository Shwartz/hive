<script>
  import { base } from "$app/paths";
</script>
<section id="whatIsAvanade" class="large light mHeight">
  <div>
    <h2 class="brandTitle center">What is Avanade X?</h2>
    <div class="smol-flexbox-grid">
      <div>
        <h3>Digital Agency</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.</p>
      </div>
      <div>
        <h3>Global Presence</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div>
        <h3>One Team</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.</p>
      </div>
    </div>
    <img src="{base}/images/map.png" alt="world map">
  </div>
</section>

<style lang="scss">
  h3 {
    font-family: var(--font-bold);
    font-size: clamp(1rem, 4vw + 1rem, 2rem);
  }

  img {
    display: block;
    width: 80%;
    margin: 2rem auto;
  }
</style>
