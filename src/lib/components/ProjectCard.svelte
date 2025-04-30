<script>
  // Define props for the component
  export let name = 'Project Title';
  export let image_src = '$lib/assets/profile/banner.png';
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
        --project-border-color: #c3c3c3;
    }

    :root.dark-mode {
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
        border: 1px solid var(--project-border-color);
        border-radius: 5px;
        text-decoration: none;
        /* box-shadow: 0px 5px 10px 4px rgb(0 0 0 / 20%); */
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

    .card:hover .background {
      transform: scale(1.025);
    }

    .container {
        padding: 0.5em;

        margin: 0.25em;
        border: 1px solid var(--project-border-color);
        border-radius: 5px;
        text-decoration: none;
    }

    .container:hover {
        border-color: #3f6dc7;
        transition: border 0.3s ease;
    }

    .outer-card {
        display: flex;
        margin-left: 0.25em;
        margin-top: 0.25em;
        font-size: 1.25em;
        text-align: left;
    }

    /* Check if width is low enough for title on desktop, but always show title normally if on touchscreen */
    @media only screen and (max-width: 720px), (pointer: coarse) {
        .card-title {
            display: none;
        }

        .card {
            height: 10em;
        }

        .title-below {
            display: block;
        }
    }
</style>
