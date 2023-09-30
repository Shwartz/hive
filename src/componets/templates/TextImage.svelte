<script>
  import { base } from "$app/paths";
  export let direction;
  export let title;
</script>

<section class="large">
  <div>
    <h2 class="center"><span class="brandTitle">{title}</span></h2>
    <div class="TextImage {direction}">
      <slot/>
    </div>
  </div>
</section>

<style lang="scss">
  :global(.brandTitle) {
    font-size: clamp(1.75rem, 4vw + 2rem, 3.75rem);
  }

  .TextImage {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 3rem;
  }

  @media (min-width: 900px) {
    .TextImage {
      flex-direction: row;
      gap: 2rem;

      :global(> div) {
        flex-basis: 50%;
      }
    }
    .TextImage.reverse {
      flex-direction: row-reverse;
    }
  }

  @media (min-width: 1150px) {
    .TextImage {
      gap: 3rem;
    }
  }
</style>
