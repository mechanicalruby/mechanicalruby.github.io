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

<div class="post">
    <h1>{data.title} - {data.date}</h1>
    <div class="content">
        <svelte:component this={data.content}/>
    </div>
</div>

<a href="/"> &lt&lt Back to main page</a>

<style>
    .post {
        padding-left: 0.75em;
        padding-right: 0.75em;
    }
    
    .content :global(h1) {
        margin-bottom: -0.25em;
        font-size: 1.5em;
        font-weight: normal;
        color: var(--text-color);
        /* font-family: "Arial"; */
    }
    
    .content :global(h2) {
        margin-bottom: -0.25em;
        font-size: 1.25em;
        font-weight: normal;
        color: var(--text-color);
        /* font-family: "Arial"; */
    }

    .content :global(p) {
        line-height: 1.4em;
    }

    .content :global(ul) {
        line-height: 1.4em;
    }
    
    h1 {
        margin: auto;
        font-size: 2em;
        font-weight: normal;

        width: fit-content;
        color: var(--text-color);
        border-radius: 5px;
    }
    h2 {
        font-size: 1em;
        font-weight: normal;
    }
    img {
        height: 2em;
    }
</style>
