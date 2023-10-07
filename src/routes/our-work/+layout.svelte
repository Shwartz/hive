<div class="our-work">
  <slot/>
</div>

<style lang="scss">
  nav {
    box-shadow: 0 5px 20px rgba(0,0,0,0.1);
    background: var(--cWhite);
    width: 100%;

    ul {
      display: flex;
      max-width: 1200px;
      margin: auto;
      padding: 1rem;
      gap: 1rem;

      li:first-child {
        margin-right: auto;
      }

      @media (min-width: 800px) {
        padding: 1rem 4rem;
      }

      @media (min-width: 1300px) {
        padding: 1rem 0;
      }
    }
  }
</style>
