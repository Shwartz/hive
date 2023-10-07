<script>
  import {browser} from "$app/environment";
  import { fly } from "svelte/transition";
  import { backOut } from "svelte/easing";
  import { onMount } from "svelte";
  import WhatIsAvanade from "../componets/sections/WhatIsAvanade.svelte";
  import OurWork from "../componets/sections/OurWork.svelte";
  import Testimonials from "../componets/sections/Testimonials.svelte";
  import WhatElse from "../componets/sections/WhatElse.svelte";
  import OurStars from "../componets/sections/OurStars.svelte";
  import ContactUs from "../componets/sections/ContactUs.svelte";

  let animate = false;
  const words = ["We Are", "Avanade X"];
  let box0, box1, box2, box3, box4, box5, box6;
  let elBox0 = {}
  let elBox1 = {}
  let elBox2 = {}
  let elBox3 = {}
  let elBox4 = {}
  let elBox5 = {}
  let elBox6 = {}

  onMount(() => {
    animate = true;
    onScrollCalculation();
  });

  box1 = (el) => elBox1.el = el;
  box2 = (el) => elBox2.el = el;
  box3 = (el) => elBox3.el = el;
  box4 = (el) => elBox4.el = el;
  box5 = (el) => elBox5.el = el;
  box6 = (el) => elBox6.el = el;
  const onScrollCalculation = () => {
    elBox0.rect = box0.getBoundingClientRect();
    elBox1.rect = elBox1.el.getBoundingClientRect();
    elBox2.rect = elBox2.el.getBoundingClientRect();
    elBox3.rect = elBox3.el.getBoundingClientRect();
    elBox4.rect = elBox4.el.getBoundingClientRect();
    elBox5.rect = elBox5.el.getBoundingClientRect();
    elBox6.rect = elBox6.el.getBoundingClientRect();
  }

  const isCurrentNavItem = (el) => {
    if (!browser) return;

    if (el) {
      const top = el.top + document.body.scrollTop;
      const bottom = el.bottom + document.body.scrollTop;
      return top < 86 && bottom > 86 ? 'current' : '';
    }
  }
</script>

<svelte:window on:scroll={onScrollCalculation}/>

<svelte:head>
  <title>Home - Ava Portfolio</title>
  <meta name="description" content="Portfolio">
</svelte:head>
<div id="avanadeX" class="hero" bind:this={box0}>
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
    <li><a class="{isCurrentNavItem(elBox0.rect)}" href="#avanadeX">Avanade X</a></li>
    <li><a class="{isCurrentNavItem(elBox1.rect)}" href="#whatIsAvanade">What is Avanade X?</a></li>
    <li><a class="{isCurrentNavItem(elBox2.rect)}" href="#ourWork">Our Work</a></li>
    <li><a class="{isCurrentNavItem(elBox3.rect)}" href="#testimonials">Testimonials</a></li>
    <li><a class="{isCurrentNavItem(elBox4.rect)}" href="#whatElse">What Else?</a></li>
    <li><a class="{isCurrentNavItem(elBox5.rect)}" href="#ourStars">Our Stars</a></li>
    <li><a class="{isCurrentNavItem(elBox6.rect)}" href="#contactUs">Contact Us</a></li>
  </ul>
</section>

<WhatIsAvanade box={box1} />
<OurWork box={box2} />
<Testimonials box={box3} />
<WhatElse box={box4}/>
<OurStars box={box5}/>
<ContactUs box={box6}/>

<style lang="scss">
  .hero {
    display: flex;
    height: 780px;
    justify-content: center;
    align-items: center;
    margin-top: -24px;
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
    color: var(--cBlack);
    text-decoration: none;
  }

  .nav a:hover, .nav a:focus {
    background: var(--bgGradient);
    background-size: cover;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  .nav a.current {
    background: var(--bgGradient);
    background-size: cover;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
</style>
