<script>
  import { base } from "$app/paths";
</script>

<section id="ourWork" class="large dark mHeight">
  <div class="wrap">
    <div class="text">
      <h2 class="brandTitle">Our Work</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.</p>
      <a href="{base}/our-work">See our work</a>
    </div>
  </div>
</section>

<style lang="scss">
  section {
    .wrap {
      display: flex;
      align-items: center;
      width: 100%;
      background: url('$lib/images/ipad.png') no-repeat var(--cBlack) 100% 100%;
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
