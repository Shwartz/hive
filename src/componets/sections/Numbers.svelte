<div class="numbers">
  <h2 class="center">How we're making an impact</h2>
  <div class="flex">
    <div class="numberCard center">
      <div class="title"><span class="val val1">90</span><span class="descr">K</span></div>
      <div class="text">Scelerisque ac ultricies volutpat a massa vel lectus nulla. Augue ultricies nisl gravida
        consequat adipiscing etiam amet. Mauris nec tortor justo aenean quam senectus.
      </div>
      <div class="person">Hannah Banana, CTO Dyson</div>
    </div>
    <div class="numberCard center">
      <div class="title"><span class="val val2">89</span><span class="descr">%</span></div>
      <div class="text">Scelerisque ac ultricies volutpat a massa vel lectus nulla. Augue ultricies nisl gravida
        consequat adipiscing etiam amet. Mauris nec tortor justo aenean quam senectus.
      </div>
      <div class="person">James Dyson, 2019</div>
    </div>
  </div>

  <div class="flexCard">
    <div class="card">
      <p><span>18</span></p>
      <p>Team Members</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
    </div>
    <div class="card">
      <p><span>2</span></p>
      <p>Week Discovery</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
    </div>
    <div class="card">
      <p><span>16</span></p>
      <p>Week Project</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
    </div>
    <div class="card">
      <p><span>100K</span></p>
      <p>Employees Engage with this</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
    </div>
  </div>
</div>

<style lang="scss">
  .flexCard {
    --min: 25ch;
    --gap: 1rem;

    display: grid;
    grid-gap: var(--gap);
    grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--min)), 1fr));

    margin-top: 3rem;
  }
  .card {
    text-align: center;
    padding: 2rem;

    p:nth-child(1) span {
      background: var(--bgGradient);
      background-size: cover;
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;

      font-size: 5rem;
      font-weight: bold;
    }

    p:nth-child(2) {
      font-size: 1.5rem;
      font-weight: bold;
    }
  }


  .numbers {
    margin-top: 4rem;
  }

  .numberCard {
    max-width: 360px;
  }

  h2 {
    font-weight: 900;
    font-size: clamp(2rem, 4vw + 1.6rem, 3.75rem);
  }

  .flex {
    display: flex;
    margin-top: 2rem;
    justify-content: space-evenly;
  }

  .title {
    font-size: 16rem;
    font-family: var(--font-body);
    font-weight: bold;
    line-height: 10rem;
    margin-top: 2rem;

    span.val1 {
      background: var(--bgGradient);
    }

    span.val2 {
      background: var(--bgGradient-1);
    }

    span.val {
      background-size: cover;
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }

    span.descr {
      font-size: 3.75rem;
      font-weight: normal;
    }
  }

  .person {
    font-size: 1.5rem;
    font-weight: bold;
    margin-top: 1rem;
  }
</style>
