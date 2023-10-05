<script>
  import lineDecoded from "/src/assets/line.svg?src";


</script>

<div class="line">
  {@html lineDecoded}
</div>

<style lang="scss">
  .line {
    text-align: center;
  }

  :global(.svg) {
    width: 100%;
  }

  :global(.pathGradientSmall) {
    stroke-dasharray: 500;
    stroke-dashoffset: 1000;
    animation: dash 10s linear forwards;
    animation-iteration-count: 3;
    animation-delay: 2s;

    @keyframes dash {
      to {
        stroke-dashoffset: 0;
      }
    }
  }

  :global(.pathGradient) {
    stroke-dasharray: 500;
    stroke-dashoffset: 1000;
    animation: dash 10s linear forwards;
    animation-iteration-count: 3;
    animation-delay: 6s;

    @keyframes dash {
      to {
        stroke-dashoffset: 0;
      }
    }
  }
</style>

<!--
https://css-tricks.com/svg-line-animation-works/-->
