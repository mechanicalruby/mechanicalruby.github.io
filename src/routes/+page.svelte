<script>
    // Components
    import { onMount } from 'svelte';
    import ProfilePicture from "$lib/components/ProfilePicture.svelte";
    import PostLink from "$lib/components/PostLink.svelte";
    import ProjectCard from "$lib/components/ProjectCard.svelte";
    import DirectoryButton from "$lib/components/DirectoryButton.svelte";

    import profile_picture from '$lib/assets/profile/new_avatar.webp'
    import horizontal_line from '$lib/assets/hbar.webp'

    import soko_preview from '$lib/assets/sokopoko_preview.png'

    import { base } from '$app/paths';
</script>

<meta property="og:title" content="MechanicalRuby"/>
<meta property="og:description" content="Blog."/>
<meta property="og:type" content="website"/>

<div class="nameplate">
    <ProfilePicture
        name="Robbie"
        username="@mechanicalruby"
        image_src={profile_picture}
        image_rendering="auto"
        route="/"
    />
</div>

<div class="intro">
    <p>
        Hello! I'm a developer and an artist.
        Come see what I have here - in my digital hideout.
    </p>
</div>

<div class="page">
    <div class="header">Blog posts</div>
    <div class="bar"><img src={horizontal_line} class="inner-bar" alt="divider"/></div>
    
    <PostLink
        name="Hello, world!"
        description="I have my own site now!"
        date='2025-04-29'
        route="{base}/blog/a-new-path"
        />
</div>

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

  .page {
      margin: auto;

  }
  
  .bar {
    display: flex;
    justify-content: center;
    width: 100%;
    object-fit: contain;

    user-drag: none;
    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }

  .inner-bar {
    min-width: none;
    max-width: 548px;
    width: 90%;
  }

  .nameplate {
    width: 100%;
  }

  .intro {
    justify-content: center;
    padding-left: 5%;
    padding-right: 5%;
  }

  @media (max-width: 640px) {
      .page-left {
          flex: 100%;
      }
      .page-right {
          flex: 100%;
      }
  }
</style>
