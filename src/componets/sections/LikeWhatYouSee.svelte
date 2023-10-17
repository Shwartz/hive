<section class="large">
  <div class="contactUs">
    <h3 class="title">Like What you see?</h3>
    <div>
      <p class="bold">Get in touch with us to see what we can do for you.</p>
      <p>Please send us an email and<br/> we’ll respond in no time!</p>
      <p>
        <button class="btn-black" type="button">Email Us</button>
      </p>
    </div>
  </div>
</section>

<style lang="scss">
  .contactUs {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 1rem;
    margin: 2rem 0;

    @media (min-width: 600px) {
      flex-direction: row;
      > * {
        flex-basis: 50%;
      }
    }

    .title {
      display: inline-block;
      background: var(--bgGradient);
      background-size: cover;
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      font-size: clamp(1.75rem, 2vw + 2rem, 3rem);
      font-family: var(--font-bold);
      line-height: 4rem;
    }

    .bold {
      font-size: 2rem;
      line-height: 2.2rem;
      font-family: var(--font-bold);
    }
  }
</style>
