<script>
  import { base } from "$app/paths";

  export let data;
  export let currentTag = "all";
  const handleTag = (tag) => currentTag = tag;
  const allCategories = data.posts.map((post) => post.categories).flat();
  const categories = allCategories.filter((tag, i) => allCategories.indexOf(tag) === i);

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
    <a href="{base}/">Back Home</a>
    <div class="postHead">
      <h1 class="center"><span class="brandTitle">Our work</span></h1>
      <p>Lorem ipsum dolor sit amet consectetur. Scelerisque ac ultricies volutpat a massa vel lectus nulla.
        Augue
        ultricies nisl gravida consequat adipiscing etiam amet. Mauris nec tortor justo aenean quam senectus.</p>
    </div>


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
            <img src="{base}/images/{post.heroImg}" alt={post.title}>
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
      <div></div>
      <div></div>
    </div>
  </div>
</section>

<style lang="scss">
  .catsNav {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 12px;
  }

  .cards {
    --min: 35ch;
    --gap: 1rem;

    display: grid;
    grid-gap: var(--gap);
    grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--min)), 1fr));

    margin-top: 3rem;

    .card {
      display: flex;
      flex-direction: column;
      position: relative;
      min-height: 494px;
      border-radius: 30px;
      background: var(--cLightSection);
      overflow: hidden;
      box-shadow: 0 0 2px rgba(0,0,0,0);
      transition: all 0.2s;
      /*max-width: 500px;*/

      &:hover, &:focus-within {
        box-shadow: var(--focusShadow)
      }

      .head {
        flex-grow: 1;

        img {
          display: block;
          object-fit: cover;
          height: 100%;
        }
      }

      .content {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 128px;
      }

      a {
        text-decoration: none;
        color: var(--cBlack);
        display: block;
        text-align: center;
        margin: 1rem 0.5rem;
        font-weight: 700;

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
