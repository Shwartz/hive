---
title: State of the Art Digital Workplace
description: Lorem ipsum dolor sit amet consectetur. Scelerisque ac ultricies volutpat a massa vel lectus nulla. Augue ultricies nisl gravida consequat adipiscing etiam amet. Mauris nec tortor justo aenean quam senectus.
date: '2023-07-04'
published: true
heroImg: 'Project_1A.jpg'
categories:
- capitalMarkets
- banking

---

<script>
    import { base } from "$app/paths";
    import HeroTextLeft from "../componets/templates/HeroTextLeft.svelte";
</script>

<section class="large">
    <div class="comboLeft">
        <img src="{base}/images/Project_1A-long.jpg" alt="some alt"/>
        <div class="left">
            <h3>Detail about this project goes here</h3>
            <p>Lorem ipsum dolor sit amet consectetur. Scelerisque ac ultricies volutpat a massa vel lectus nulla. Augue ultricies nisl gravida consequat adipiscing etiam amet. Mauris nec tortor justo aenean quam senectus.  Lorem ipsum dolor sit amet consectetur.</p>
            <p>Scelerisque ac ultricies volutpat a massa vel lectus nulla. Augue ultricies nisl gravida consequat adipiscing etiam amet. Mauris nec tortor justo aenean quam senectus.</p>
        </div>
    </div>

</section>

<style>
.comboLeft {
    background: red;
    position: relative;
}

.comboLeft .left {
    max-width: 400px;
    padding: 2rem;
    background: lightgray;
    border-radius: 30px;
    position: absolute;
    bottom: -200px;
    left: 100px;
}

</style>

