<script>
  import { fly } from "svelte/transition";
  import { backOut } from "svelte/easing";
  import { onMount } from "svelte";
  import { base } from "$app/paths";
  import WhatIsAvanade from "../componets/sections/WhatIsAvanade.svelte";
  import OurWork from "../componets/sections/OurWork.svelte";
  import Testimonials from "../componets/sections/Testimonials.svelte";
  import WhatElse from "../componets/sections/WhatElse.svelte";
  import OurStars from "../componets/sections/OurStars.svelte";
  import ContactUs from "../componets/sections/ContactUs.svelte";

  let animate = false;
  const words = ["We Are", "Avanade X"];

  onMount(() => {
    animate = true;
  });
</script>

<svelte:head>
  <title>Home - Ava Portfolio</title>
  <meta name="description" content="Portfolio">
</svelte:head>
<div class="nav-placeholder">
  <div>
    <a href="{base}/">Avas Logo</a>
  </div>
</div>
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
    <li><a href="#testimonials">Testimonials</a></li>
    <li><a href="#whatElse">What Else?</a></li>
    <li><a href="#ourStars">Our Stars</a></li>
    <li><a href="#contactUs">Contact Us</a></li>
  </ul>
</section>

<WhatIsAvanade />
<OurWork />
<Testimonials />
<WhatElse />
<OurStars />
<ContactUs />

<style lang="scss">
  .nav-placeholder {
    padding: 8px;
    background: var(--cLightSection);

    > div {
      display: flex;
      max-width: 1200px;
      margin: auto;
    }

    a {
      padding: 8px;
    }
  }

  .hero {
    display: flex;
    height: 780px;
    justify-content: center;
    align-items: center;
    background: url('/images/hero_bg-2.jpg') center no-repeat;
    background-size: cover;

    h1 {
      color: var(--cWhite);
      line-height: 9rem;
      font-family: var(--font-bold);
      font-size: clamp(1.75rem, 6vw + 3rem, 8rem);
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
    background: rgba(255,255,255,1);
  }

  .nav {
    display: flex;
    justify-content: space-evenly;
    gap: 8px;
    font-family: var(--font-bold);
    width: 100%;
    max-width: 1200px;
  }

  .nav a {
    background: var(--bgGradient);
    background-size: cover;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  .nav a:hover {
    background: var(--bgGradient);
    background-size: cover;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
</style>
