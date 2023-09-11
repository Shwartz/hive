<script>
  import { fly } from "svelte/transition";
  import { backOut } from "svelte/easing";
  import { onMount } from "svelte";
  import { base } from "$app/paths";
  import WhatIsAvanade from "../componets/pages/WhatIsAvanade.svelte";
  import OurWork from "../componets/pages/OurWork.svelte";

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

<div id="avanadeX" class="hero">
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

<section class="large sticky">
  <ul class="nav">
    <li><a href="#avanadeX">Avanade X</a></li>
    <li><a href="#whatIsAvanade">What is Avanade X?</a></li>
    <li><a href="#ourWork">Our Work</a></li>
  </ul>
</section>

<WhatIsAvanade />
<OurWork />

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
      color: var(--cWhite);
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

  .sticky {
    position: sticky;
    top: 0;
    padding: 2rem 1rem;
    background: rgba(255,255,255,0.95);
  }



  .cards {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 1rem;

    .card {
      border: 1px solid var(--cOrange);
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
