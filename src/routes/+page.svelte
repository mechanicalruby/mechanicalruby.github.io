<script>
  // Components
  import { onMount } from 'svelte';
  import PostLink from "$lib/components/PostLink.svelte";
  import svelte_logo from '$lib/assets/logo/svelte.svg'

  import { base } from '$app/paths';
</script>

<title>Home - MechanicalRuby</title>

<div class="intro">
  <p>
      Hi! I'm a developer and an artist. I love games and designing things.
      <br/>
      Come and see what I have here ... in my digital hideout!
  </p>
</div>

<div class="header">Blog</div>
<hr>

<PostLink
  name="Hello, world!"
  description="I have my own site now!"
  date='2025-04-29'
  route="{base}/blog/a-new-path"
  />

<style>
  a {
    color: black;
    text-decoration: none;
  }

  br {
    display: block;
    margin: 8px 0;
    line-height: 1em;
  }

  p {
    font-size: 1.1em;
  }

  .intro {
    justify-content: center;
    padding-left: 5%;
    padding-right: 5%;
  }
</style>
