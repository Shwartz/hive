

<section class="large">
  <div class="comboLeft">
    <slot/>
  </div>
</section>

<style>
    .comboLeft {
        background: red;
        position: relative;
    }

    :global(.comboLeft > div) {
        max-width: 400px;
        padding: 2rem;
        background: lightgray;
        border-radius: 30px;
        position: absolute;
        bottom: -200px;
        left: 100px;
    }
</style>
