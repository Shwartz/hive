<script>
  import { fly } from "svelte/transition";
  import { backOut } from "svelte/easing";
  import { onMount } from "svelte";
  import { base } from "$app/paths";

  let animate = false;
  const words = ["London", "Digital", "Studio", "🪄"];
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
      <span>We Are</span>
      <span>Avanade X</span>
    </h1>
  </div>
</div>

<section class="medium center">
  <h1 class="lines">&nbsp;
    {#if animate}
      {#each words as word, i}
            <span
              class={`word-${i}`}
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
  <p>By the way, if we could get 12 portfolio cases it would look awesome on a screen. The reason is that it would
    nicely divide by every screen size.</p>
</section>

<section class="large">
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
  }


  h1 {
    color: #fff;
    font-size: 8rem;
    line-height: 9rem;
    font-family: var(--font-bold);
    text-shadow: 0 0 40px rgba(0,0,0,0.7);

    span {
      display: block;
      text-align: center;
    }
  }

  p {
    font-size: 1.2em;
  }


  .lines {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin: 2rem 0 3rem;
    line-height: 4rem;
    font-size: 3.5rem;
    font-weight: 600;

    span {
      display: inline-block;


      &.word-1 {
        background: linear-gradient(90deg, rgb(255, 100, 0) 0%, rgba(9, 9, 121, 0.5) 35%, rgba(143, 46, 0, 1) 100%);
        background-size: cover;
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
      }

      &.word-0, &.word-2 {
        background: linear-gradient(90deg, rgba(143, 46, 0, 1) 0%, rgba(9, 9, 121, 0.5) 35%, rgba(255, 100, 0, 1) 100%);
        background-size: cover;
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
      }
    }
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
