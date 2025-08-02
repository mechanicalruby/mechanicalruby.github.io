<script>
    // Components
    import { onMount } from 'svelte';
    import PostLink from "$lib/components/PostLink.svelte";
    import ProjectCard from "$lib/components/ProjectCard.svelte";
    import DirectoryButton from "$lib/components/DirectoryButton.svelte";

    import soko_preview from '$lib/assets/sokopoko_preview.png'

    import { base } from '$app/paths';
</script>

<meta property="og:title" content="MechanicalRuby"/>
<meta property="og:description" content="Blog."/>
<meta property="og:type" content="website"/>

<div class="page">
  <p>
    Hello! I'm a developer and an artist.
    Come see what I have here - in my digital hideout.
  </p>

  <hr>

  <h3>Blog posts</h3>
  <ul>
    <li><a href="{base}/blog/a-new-path/">Hello, world! - Apr 29 2025</a></li>
  </ul>

  <hr>

  <h3>Links</h3>
  <ul>
    <li><a href="https://www.github.com/mechanicalruby">GitHub</a></li>
    <li><a href="https://bsky.app/profile/mechanicalruby.bsky.social">Bluesky</a></li>
    <li><a href="mailto:robbierocket05@gmail.com">Email</a></li>
  </ul>
</div>

<style>
  a {
    color: var(--text-color);
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

  .nameplate {
    width: 100%;
  }

  .page {
    justify-content: center;
    padding-left: 5%;
    padding-right: 5%;
  }
</style>
