<script>
  import { base } from "$app/paths";
  export let data;
</script>

<svelte:head>
  <title>Our work - Ava Portfolio</title>
  <meta name="description" content="Posts about our work">
</svelte:head>

<section class="large">
  <div>
    <h1 class="brandTitle center">Our work</h1>
    <div class="cards">
      {#each data.posts as post}
        <div class="card">
          <div class="head">
            <img src="{base}/images/{post.image}" alt={post.title}>
          </div>
          <div class="content">
            <h3><a href={base}/our-work/{post.slug} class="title">{post.title}</a></h3>
            <p class="description">{post.description}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style lang="scss">
  .cards {
    --min: 28ch;
    --gap: 1rem;

    display: grid;
    grid-gap: var(--gap);
    grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--min)), 1fr));

    margin-top: 3rem;

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
  }
</style>
