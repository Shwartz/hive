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
    <div>
      <p>NAVIGATION</p>
      <p><a href="{base}/">Back to home</a></p>
    </div>
    <h3 class="center">Our work</h3>
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

<style lang="scss">
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
