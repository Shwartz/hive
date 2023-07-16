<script>
  import {fly} from 'svelte/transition';
  import {backOut} from 'svelte/easing';
  import {onMount} from 'svelte';
  import dataCards from '$lib/data/cards.json';

  let animate = false

  onMount(() => {
    animate = true;
  });
</script>

<svelte:head>
    <title>Home - Ava Portfolio</title>
    <meta name="description" content="Portfolio">
</svelte:head>

<div class="hero">
    <div class="circle">
        <div class="content">
            <h1>Avanade X</h1>
            <p>We partnered with EDF Hinkley Point C to build a customized Azure platform, empowering them to transform
                their business while protecting the security of their data and applications.</p>
        </div>
    </div>
</div>

<section class="medium center">
    <h1 class="lines">&nbsp;
        {#if animate}
        <span
                in:fly={{
              delay: 300,
              duration: 300,
              easing: backOut,
              y: 100,
          }}
        >
            London
        </span>
            <span
                    in:fly={{
              delay: 600,
              duration: 300,
              easing: backOut,
              y: 100,
          }}
            >
            Digital
        </span>
            <span
                    in:fly={{
              delay: 900,
              duration: 300,
              easing: backOut,
              y: 100,
          }}
            >
            Studio
        </span>
            <span
                    in:fly={{
              delay: 1500,
              duration: 300,
              easing: backOut,
              y: 100,
          }}
            >
            🪄
        </span>
        {/if}
    </h1>

    <p>Short description</p>
</section>

<section class="medium">
    <h3 class="center">Our work</h3>
    <!--<div class="cards">
        {#each dataCards.cards as {imageUrl, title, description, link}}
            <div class="card">
                <img src={imageUrl} alt={title}>
                <p>image url {description}</p>
                <p>image url {link.text}</p>
            </div>
        {/each}
    </div>-->
    <div class="cards">
        <div class="card">
            <img src="$lib/images/card-demo.jpg" alt="title">
            <p>image url description</p>
            <p>image url link.text</p>
        </div>
    </div>

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
    background: linear-gradient(90deg, rgba(0, 0, 0, 0.6) 0%, rgba(85, 85, 85, 0.2) 100%);
    color: white;
    animation: rotation 10s infinite linear;

    .content {
      animation: rotation 10s infinite linear reverse;
    }

    h1 {
      font-size: 2em;
      margin-bottom: 1em;
    }

    p {
      font-size: 1.2em;
    }
  }

  .lines {
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    margin-bottom: 2rem;

    span {
      display: inline-block;
    }
  }

  .cards {
    display: flex;
    gap: 1rem;

    .card {
      border: 1px solid #f2f2f2;
      padding: 0.5rem;
    }
  }
</style>
