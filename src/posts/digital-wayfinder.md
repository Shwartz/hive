---
title: Digital WayFinder
description: Digital Wayfinder. Scelerisque ac ultricies volutpat a massa vel lectus nulla. Augue ultricies nisl gravida consequat adipiscing etiam amet. Mauris nec tortor justo aenean quam senectus.
date: '2023-07-01'
published: true
heroImg: 'image-40.jpg'
categories:
- capitalMarkets
- banking
---

<script>
    import { base } from "$app/paths";
    import ComboLeft from "../componets/templates/ComboLeft.svelte";
    import ComboRight from "../componets/templates/ComboRight.svelte";
    import TwoCols from "../componets/templates/TwoCols.svelte";
</script>

<ComboRight>
<div class="image">
    <img src="{base}/images/Project_1B.jpg" alt="some alt"/>
</div>
<div class="textBox">
    <div>
        <h3><span class="brandTitle">Detail about this project goes here</span></h3>
        <p>Lorem ipsum dolor sit amet consectetur. Scelerisque ac ultricies volutpat a massa vel lectus nulla. Augue ultricies nisl gravida consequat adipiscing etiam amet. Mauris nec tortor justo aenean quam senectus.  Lorem ipsum dolor sit amet consectetur.</p>
        <p>Scelerisque ac ultricies volutpat a massa vel lectus nulla. Augue ultricies nisl gravida consequat adipiscing etiam amet. Mauris nec tortor justo aenean quam senectus.</p>
    </div>
</div>
</ComboRight>

<ComboLeft>
<div class="image">
    <img src="{base}/images/Project_1A-long.jpg" alt="some alt"/>
</div>
<div class="textBox">
    <div>
        <h3><span class="brandTitle">Detail about this project goes here</span></h3>
        <p>Lorem ipsum dolor sit amet consectetur. Scelerisque ac ultricies volutpat a massa vel lectus nulla. Augue ultricies nisl gravida consequat adipiscing etiam amet. Mauris nec tortor justo aenean quam senectus.  Lorem ipsum dolor sit amet consectetur.</p>
        <p>Scelerisque ac ultricies volutpat a massa vel lectus nulla. Augue ultricies nisl gravida consequat adipiscing etiam amet. Mauris nec tortor justo aenean quam senectus.</p>
    </div>
</div>
</ComboLeft>

<TwoCols direction="reverse" title="Intelligent Search (img Right)">
<div>
    <img src="{base}/images/square-face.jpg" alt="some alt"/>
</div>
<div>
    <h3>Lorem ipsum dolor sit amet</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.</p>
    
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in volutate.</p>
</div>
</TwoCols>

<TwoCols direction="" title="Intelligent Search (img Left)">
<div>
    <img src="{base}/images/image-44.jpg" alt="some alt"/>
</div>
<div>
    <h3>Lorem ipsum dolor sit amet</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.</p>

    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in volutate.</p>
</div>
</TwoCols>

# h1 Title using markdown
## h2 Title using markdown
### h3 Title using markdown

This is simple paragraph
