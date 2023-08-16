<script>
  import { fly } from "svelte/transition";
  import { backOut } from "svelte/easing";
  import { onMount } from "svelte";
  import { base } from "$app/paths";

  let animate = false;
  const words = ["We Are", "Avanade X"];
  export let data;

  onMount(() => {
    animate = true;
  });
</script>

<svelte:head>
  <title>Home - Ava Portfolio</title>
  <meta name="description" content="Portfolio">
</svelte:head>

<div class="hero">
  <div class="content">
    <h1>
      {#if animate}
        {#each words as word, i}
            <span
              class={`word-${i}`}
              in:fly|global={{
                    delay: 500 * (i + 1),
                    duration: 300,
                    easing: backOut,
                    y: (i === 1) ? 100: -100,
                }}
            >
              <span>{word}</span>
            </span>
        {/each}
      {/if}
    </h1>
  </div>
</div>

<section class="large">
  <ul class="nav">
    <li><a href="#">Avanade X</a></li>
    <li><a href="#">What is Avanade X?</a></li>
    <li><a href="#">Our Work</a></li>
  </ul>
</section>

<section class="medium center">
  <div>
    <h2 class="brandTitle">What is Avanade X?</h2>

    <p>Short description</p>
    <p>By the way, if we could get 12 portfolio cases it would look awesome on a screen. The reason is that it would
      nicely divide by every screen size.</p>
  </div>
</section>

<section class="medium dark">
  <div>
    <h2 class="brandTitle">Our Work</h2>

    <p>Short description</p>
    <p>By the way, if we could get 12 portfolio cases it would look awesome on a screen. The reason is that it would
      nicely divide by every screen size.</p>
  </div>
</section>

<section class="large">
  <div>
    <h3 class="center">Our work 2</h3>
    <div class="cards">
      {#each data.posts as post}
        <div class="card">
          <div class="head">
            <img src="{base}/images/{post.image}" alt={post.title}>
          </div>
          <div class="content">
            <h3><a href={base}/{post.slug} class="title">{post.title}</a></h3>
            <p class="description">{post.description}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<h3>Testimonials</h3>
<p>Snippets of testimonials, probably some slide</p>

<style lang="scss">
  .hero {
    display: flex;
    height: 780px;
    justify-content: center;
    align-items: center;
    background: url('$lib/images/hero_bg-2.jpg') center no-repeat;
    background-size: cover;

    h1 {
      color: #fff;
      font-size: 8rem;
      line-height: 9rem;
      font-family: var(--font-bold);
      text-shadow: 0 0 40px rgba(0, 0, 0, 0.7);

      span {
        display: block;
        text-align: center;
      }
    }
  }

  p {
    font-size: 1.2em;
  }

  h2.brandTitle {
    background: linear-gradient(90deg, #CE0569 0%, #FF5800 100%);
    background-size: cover;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    font-size: 5rem;
    font-family: var(--font-bold);
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
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

    a {
      display: block;
    }

    @media (min-width: 480px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @media (min-width: 800px) {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    @media (min-width: 1024px) {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
  }
</style>
