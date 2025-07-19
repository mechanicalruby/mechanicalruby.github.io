<script>
    // Define props for the component
    export let name = 'Blog Post Title';
    export let description = 'A post from my blog...';
    export let route = '{base}/blog/post-route';
    export let date = '2024-08-25'; // Default date
    export let icon = '';
</script>

<a href={route} class="post-link">
    <div class="circle"></div>
    <div class="post-info">
        <span class="post-name">{name}</span>
        <p class="post-description">{description}</p>
    </div>
    <span class="post-date">{date}</span>
</a>

<style>
    :root {
        --post-background-color: #f2f2f9;
        --post-hover-color: #e0e0e0;
        --post-text-color: #262b44;
    }

    :root.dark-mode {
        --post-background-color: #1e1e1e;;
        --post-hover-color: #151515;
        --post-text-color: #f5f5f2;
    }

    .post-image {
        margin: 0.25em;
    }

    .post-link {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        padding: 0.5em 1em;
        margin: 0.5em 0;
        background-color: var(--post-hover-color);
        border: 1px solid transparent;
        border-radius: 5px;
        text-decoration: none;
        color: var(--post-text-color);
    }

    .post-link:hover {
        background-color: var(--post-background-color);
        border: 1px solid var(--border-color);
        border-radius: 5px;
    }

    .circle {
        width: 1em;
        height: 1em;
        background-color: var(--accent-color);
        border-radius: 50%;
        margin-right: 0.5em;
        flex-shrink: 0;
        align-self: flex-start;
        margin-top: 0.2em;
    }

    .post-info {
        flex-grow: 1;
    }

    .post-name {
        font-size: 1.1em;
        font-weight: bold;
    }

    .post-description {
        font-size: 0.9em;
        font-weight: 200;
        margin-top: 0.2em;
        margin-bottom: 0.2em;
    }

    .post-date {
        font-size: 1em;
        color: #888;
    }
</style>
