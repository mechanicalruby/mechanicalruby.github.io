<script>
  /** @type {import('./$types').PageData} */
  export let data;
</script>

<title>{data.title} - MechanicalRuby</title>

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
    
    h1 {
        text-align: center;
        margin-bottom: -0.25em;
        font-size: 2.0em;
        font-weight: bold;

        margin: auto;
        padding: 0.25em;
        width: fit-content;
        background-color: #3f6dc7;
        color: var(--background-color);
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
