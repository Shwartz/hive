<script>
  import {fly} from 'svelte/transition';
  import {backOut} from 'svelte/easing';
  import {onMount} from 'svelte';
  import dataCards from '$lib/data/cards.json';

  let animate = false

  const words = ['London', 'Digital', 'Studio', '🪄'];

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
            {#each words as word, i}
            <span
                    in:fly|global={{
                    delay: 500 * (i + 1),
                    duration: 300,
                    easing: backOut,
                    y: (i === 3) ? -100: 100,
                }}
            >
                {word}
            </span>
            {/each}
        {/if}
    </h1>

    <p>Short description</p>
    <p>By the way, if we could get 12 portfolio cases it would look awesome on a screen. The reason is that it would nicely divide by every screen size.</p>
</section>

<section class="large">
    <h3 class="center">Our work</h3>
    <div class="cards">
        {#each dataCards.cards as {imageUrl, title, description, link}}
            <div class="card">
                <div class="head">
                    <img src="{imageUrl}" alt={title}>
                </div>
                <div class="content">
                    <p>image url {description}</p>
                    <p>image url {link.text}</p>
                </div>
            </div>
        {/each}
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
    display: grid;
    grid-template-columns: repeat(1,minmax(0,1fr));
    gap: 1rem;

    .card {
      border: 1px solid #f1bd8e;
      border-radius: 5px;
      overflow: hidden;

      .head {
        aspect-ratio: 16/9;

        img {
          display: block;
          object-fit: cover;
          height: 100%;
        }
      }

      .content {
        padding: 0.5rem;
      }
    }

    @media (min-width: 480px) {
      grid-template-columns: repeat(2,minmax(0,1fr));
    }

    @media (min-width: 800px) {
      grid-template-columns: repeat(3,minmax(0,1fr));
    }

    @media (min-width: 1024px) {
      grid-template-columns: repeat(4,minmax(0,1fr));
    }
  }
</style>
