<script>
  import { base } from "$app/paths";

  export let data;
  export let currentTag = "all";
  const handleTag = (tag) => currentTag = tag;
  const categories = data.posts.map((post) => post.categories).flat();

  $: filteredPosts = currentTag === "all"
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
    <p class="mw">Lorem ipsum dolor sit amet consectetur. Scelerisque ac ultricies volutpat a massa vel lectus nulla.
      Augue
      ultricies nisl gravida consequat adipiscing etiam amet. Mauris nec tortor justo aenean quam senectus.</p>

    <div class="catsNav">
      <button aria-current="{currentTag === 'all'}" class="btn" type="button" on:click={() => handleTag('all')}>All
      </button>
      {#each categories as cat}
        <button aria-current="{currentTag === cat}" class="btn" type="button"
                on:click={() => handleTag(cat)}>{cat}</button>
      {/each}
    </div>

    <div class="cards">
      {#each filteredPosts as post}
        <div class="card">
          <div class="head">
            <img src="{base}/images/{post.image}" alt={post.title}>
          </div>
          <div class="content">
            <h3><a href="{base}/our-work/{post.slug}" class="title">{post.title}</a></h3>
            <div class="categories">
              {#each post.categories as category}
                <span>#{category}</span>
              {/each}
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style lang="scss">
  .mw {
    max-width: 800px;
    margin: 1rem auto;
    text-align: center;
  }

  .catsNav {
    display: flex;
    justify-content: center;
    gap: 12px;
  }

  .cards {
    --min: 29ch;
    --gap: 1rem;

    display: grid;
    grid-gap: var(--gap);
    grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--min)), 1fr));

    margin-top: 3rem;

    .card {
      position: relative;
      min-height: 494px;
      border-radius: 35px;
      background: var(--cLightSection);
      overflow: hidden;
      transition: all 0.3s;

      &:hover, &:focus-within {
        box-shadow: var(--focusShadow)
      }

      .head {
        aspect-ratio: 9/9;

        img {
          display: block;
          object-fit: cover;
          height: 100%;
        }
      }

      .content {
        padding: 0.5rem;
      }

      a {
        text-decoration: none;
        color: var(--cBlack);
        display: block;
        text-align: center;
        margin: 1rem 0.5rem;

        &:after {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
        }
      }
    }
  }
  .categories {
    display: flex;
    position: absolute;
    bottom: 4px;
    right: 2rem;
    font-size: 11px;
    gap: 4px;
  }
</style>
