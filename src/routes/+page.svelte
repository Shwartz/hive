<script>
</script>

<svelte:head>
    <title>Home - Ava Portfolio</title>
    <meta name="description" content="Portfolio">
</svelte:head>

<div class="hero">
    <div class="circle">
        <h1>Avanade X</h1>
        <p>We partnered with EDF Hinkley Point C to build a customized Azure platform, empowering them to transform
            their business while protecting the security of their data and applications.</p>
    </div>
</div>

<section class="medium center">
    <h1>London Digital Studio</h1>
    <p>Short description</p>
</section>

<section class="medium center">
    <h3>Our work</h3>

</section>
<h3>Testimonials</h3>
<p>Snippets of testimonials, probably some slide</p>

<style lang="scss">
  .hero {
    display: flex;
    height: 500px;
    justify-content: center;
    align-items: center;
    background: url('$lib/images/bg-hero.jpg') center no-repeat;
    background-size: cover;
  }

  .circle {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 450px;
    height: 450px;
    padding: 24px;
    text-align: center;
    border: 1px solid rgba(255, 255, 255, 0.5);
    box-shadow: 0 0 20px white;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.2);
    color: white;

    h1 {
      font-size: 2em;
      margin-bottom: 1em;
    }

    p {
      font-size: 1.2em;
    }
  }
</style>
