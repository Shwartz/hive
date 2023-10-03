<script>
  import lineDecoded from "/src/assets/line.svg?src";


</script>

<div class="line">
  {@html lineDecoded}
</div>

<style lang="scss">
  .line {
    height: 250px;
    text-align: center;
  }

  :global(.svg) {
    height: 100%;
    width: 100%;
  }

  :global(.pathBg) {
    stroke-dasharray: 500;
    stroke-dashoffset: 1000;
    animation: dash 10s linear forwards;
    animation-iteration-count: 2;

    @keyframes dash {
      to {
        stroke-dashoffset: 0;
      }
    }
  }
</style>

<!--
https://css-tricks.com/svg-line-animation-works/-->
