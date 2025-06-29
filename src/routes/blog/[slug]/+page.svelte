<script>
    /** @type {import('./$types').PageData} */
    export let data;

    import ProfilePicture from "$lib/components/ProfilePicture.svelte";
    import profile_picture from '$lib/assets/profile/new_avatar.webp'

    import horizontal_line from '$lib/assets/hbar.webp'
</script>

<title>{data.title} - MechanicalRuby</title>
<meta property="og:title" content={data.title} />
<meta property="og:type" content="website" />

<div class="nameplate"> 
    <ProfilePicture
        name="Robbie"
        username="@mechanicalruby"
        image_src={profile_picture}
        image_rendering="auto"
        route="/"
    />
</div>

<div class="post">
    <h1>{data.title}</h1>
    <h2>Published {data.date}</h2>
    <div class="content">
        <svelte:component this={data.content}/>
    </div>
</div>

<style>
    .post {
        padding-left: 0.75em;
        padding-right: 0.75em;
    }
    
    .content :global(h1) {
        margin-bottom: -0.25em;
        font-size: 1.5em;
        font-weight: 600;
        /* font-family: "Arial"; */
    }
    
    .content :global(h2) {
        margin-bottom: -0.25em;
        font-size: 1.25em;
        font-weight: bold;
        /* font-family: "Arial"; */
    }

    .content :global(p) {
        line-height: 1.4em;
        font-family: "Arial";
    }

    .content :global(ul) {
        line-height: 1.4em;
        font-family: "Arial";
    }
    
    h1 {
        text-align: center;
        margin-bottom: -0.25em;
        font-size: 2.0em;
        font-weight: bold;

        margin: auto;
        padding: 0.25em;
        width: fit-content;
        background-color: var(--accent-color);
        color: var(--header-text-color);
        border-radius: 5px;
    }
    h2 {
        text-align: center;
        font-size: 1em;
        font-weight: normal;
    }
    img {
        height: 2em;
    }
</style>
