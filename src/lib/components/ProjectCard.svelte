<script>
  // Define props for the component
  export let name = 'Project Title';
  export let image_src = '$lib/assets/sokopoko_preview.png';
  export let route = '/project-page'; // Default route
  export let image_rendering = 'auto';
</script>

<a href={route} class="card-link">
    <div class="container">
        <div class="card">
            <div class="background" style="background-image: url({image_src}); image-rendering: {image_rendering};"></div>
            <div class="overlay"></div>
            <h1 class="card-title">{name}</h1>
        </div>
        <div class="outer-card">
            {name}
        </div>
    </div>
</a>

<style>
    :root {
        --project-background-color:#e0e0e0;
        --project-border-color: #c3c3c3;
    }

    :root.dark-mode {
        --project-background-color: #151515;
        --project-border-color: #3f3f3f;
    }

    .card-link {
        text-decoration: none;
        color: inherit;
    }

    .card {
        position: relative;
        width: 100%;
        height: 12em;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        overflow: hidden;
        text-decoration: none;
    }

    .background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: black;
        background-size: cover;
        background-position: center;
        transition: transform 0.3s ease;
        z-index: 0; /* Ensure it stays behind the gradient and text */
    }

    .container {
        padding: 0.5em;
        margin: 0.5em;
        text-decoration: none;

        background-color: var(--project-background-color);
        border: 1px solid transparent;
        border-radius: 5px;
    }

    .container:hover {
        background-color: var(--post-background-color);
        border: 1px solid var(--border-color);
        border-radius: 5px;
    }

    .outer-card {
        display: flex;
        margin-left: 0.25em;
        margin-top: 0.25em;
        font-size: 1.25em;
        justify-content: center;
    }

    /* Check if width is low enough for title on desktop, but always show title normally if on touchscreen */
    @media only screen and (max-width: 720px), (pointer: coarse) {
        .card-title {
            display: none;
        }

        .card {
            height: 10em;
        }
    }
</style>
