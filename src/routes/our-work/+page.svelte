<script>
  import { base } from "$app/paths";

  export let data;
  export let currentTag = "all";
  const handleTag = (tag) => currentTag = tag;

  $: filteredPosts = currentTag === 'all'
    ? data.posts
    : data.posts.filter(post => post.categories.includes(currentTag));
</script>

<svelte:head>
  <title>Our work - Ava Portfolio</title>
  <meta name="description" content="Posts about our work">
</svelte:head>

<section class="large">
  <div>
    <h1 class="brandTitle center">Our work</h1>
    <p>Current tag: {currentTag}</p>
    <ul>
      <li><a on:click={() => handleTag('all')} href="#all">All</a></li>
      <li><a on:click={() => handleTag('insurance')} href="#insurance">Insurance</a></li>
      <li><a on:click={() => handleTag('health')} href="#health">Health</a></li>
      <li><a on:click={() => handleTag('capitalMarkets')} href="#capitalMarkets">Capital Markets</a></li>
      <li><a on:click={() => handleTag('energy')} href="#energy">Energy</a></li>
      <li><a on:click={() => handleTag('banking')} href="#banking">Banking</a></li>
    </ul>
    {data.posts.length}
    <div class="cards">
      {#each filteredPosts as post}
          <div class="card">
            <div class="head">
              <img src="{base}/images/{post.image}" alt={post.title}>
            </div>
            <div class="content">
              {#each post.categories as category}
                <span>{category}</span>
              {/each}
              <h3><a href="{base}/our-work/{post.slug}" class="title">{post.title}</a></h3>
              <p class="description">{post.description}</p>
            </div>
          </div>
      {/each}

      <div class="card experiment">
        <div class="bg-image">
          <img src="{base}/images/card-demo1.jpg" alt="image" />
        </div>
        <div class="content">
          <h3><a href={base}/our-work/banking class="title">Test article</a></h3>
          <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis efficitur libero,
            ac blandit urna. </p>
        </div>
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  .experiment {
    position: relative;
    background-color: #F5F7FA;

    .bg-image {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      opacity: 0;
      transition: all 0.3s;

      &:after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.4);
      }

      img {
        height: 100%;
        object-fit: cover;
      }
    }

    .description {
      opacity: 0;
    }

    &:hover .bg-image {
      opacity: 1;
    }

    &:hover h3 a {
      color: white;
    }

    &:hover .description {
      opacity: 1;
      color: white;
    }

    h3 a {
      color: #1D1D1D;
      text-decoration: none;
    }

    .content {
      position: relative;
    }
  }

  .cards {
    --min: 29ch;
    --gap: 1rem;

    display: grid;
    grid-gap: var(--gap);
    grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--min)), 1fr));

    margin-top: 3rem;

    .card {
      border-radius: 12px;
      overflow: hidden;
      min-height: 500px;
      background: var(--cLightSection);

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
  }
</style>
