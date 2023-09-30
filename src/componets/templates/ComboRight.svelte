<section class="large">
  <div class="comboRight">
    <slot />
  </div>
</section>

<style lang="scss">
  .comboRight {
    position: relative;

    display: grid;
    grid-template-columns: 100px repeat(4, 1fr) 100px;
    grid-template-rows: repeat(2, 1fr) minmax(0, 0.5fr);
    grid-column-gap: 0;
    grid-row-gap: 0;

    :global(h3) {
      line-height: normal;
    }

    :global(.brandTitle) {
      font-size: 2rem;
      margin-top: 0;
    }

    :global(p) {
      font-size: 1rem;
    }

    :global(img) {
      height: 100%;
      object-fit: cover;
    }

    :global(.image) {
      grid-area: 1 / 1 / 2 / 7;
    }

    :global(.textBox) {
      grid-area: 2 / 1 / 4 / 7;

      :global(> div) {
        max-width: 440px;
        padding: 2rem;
        background: var(--cLightSection);
      }
    }

    @media (min-width: 500px) {
      :global(.image) {
        grid-area: 1 / 1 / 3 / 7;
      }

      :global(.textBox) {
        grid-area: 2 / 2 / 4 / 7;
        margin-left: auto;
        :global(> div) {
          border-radius: 30px;
        }
      }
    }

    @media (min-width: 900px) {
      :global(.textBox) {
        grid-area: 2 / 3 / 4 / 6;
        border-radius: 30px;
      }
    }

    @media (min-width: 1150px) {
      :global(.textBox) {
        grid-area: 2 / 4 / 4 / 6;
        border-radius: 30px;
      }
    }
  }
</style>
