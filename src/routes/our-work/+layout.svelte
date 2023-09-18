<script>
  import { base } from "$app/paths";
</script>

<div class="our-work">
  <nav>
    <ul>
      <li><a href="{base}/">Avanade</a></li>
      <li><a href="#">Industries</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Insights</a></li>
      <li><a href="#">Careers</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact Us</a></li>
    </ul>
  </nav>
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
