<script>
    export let data;
    import { base } from '$app/paths';
</script>

<title>{data.title} - MechanicalRuby</title>
<meta property="og:title" content={data.title} />
<meta property="og:type" content="website" />

<h1>{data.title}</h1>
<p>published {data.date}</p>
<div class="content">
    <svelte:component this={data.content}/>
</div>

<a href="/"> &lt&lt Back to main page</a>

<style>
    h1 {
        font-size: 2em;
        font-weight: bold;
        text-align: center;
        margin-top: 0.8em;
        margin-bottom: 0.2em;
    }

    p {
        font-size: 1em;
        font-weight: normal;
        text-align: center;
        margin-top: 0em;
        margin-bottom: 0.8em;
    }

    .content :global(h1) {
        font-size: 1.5em;
    }
    
    .content :global(h2) {
        font-size: 1.25em;
    }

    .content :global(p) {
        line-height: 1.4em;
    }

    .content :global(ul) {
        line-height: 1.4em;
    }
</style>
