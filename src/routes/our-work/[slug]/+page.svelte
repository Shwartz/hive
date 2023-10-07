<script>
  /*import { formatDate } from "$lib/utils";*/
  import { base } from "$app/paths";
  export let data;
</script>

<svelte:head>
  <title>{data.meta.title}</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content={data.meta.title} />
</svelte:head>

<section class="large">
  <div>
    <a href="{base}/our-work">Back to Our Work</a>
    <hgroup class="postHead">
      <h1 class="brandTitle center">{data.meta.title}</h1>
      <!--<p>Published at {formatDate(data.meta.date)}</p>-->
      <p>{data.meta.description}</p>
    </hgroup>

    <div class="tags">
      {#each data.meta.categories as category}
        <span class="surface-4">&num;{category}</span>
      {/each}
    </div>

    <div class="prose">
      <svelte:component this={data.content} />
    </div>
  </div>
</section>

<style>
  .tags {
      display: flex;
      justify-content: end;
      gap: 8px;
      margin-top: 1rem;
      font-size: 11px;
  }
</style>
