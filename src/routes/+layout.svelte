<script>
    import "@fontsource/lexend"; // Defaults to weight 400
    import "@fontsource/red-hat-display";
    import '$lib/styles/styles.css';
    import '$lib/styles/prism-base16-ateliersulphurpool.light.css';

    import tree from '$lib/assets/tree.png'
</script>

<slot></slot>

<footer class="footer">
    <a href="/"><img src={tree} alt="A pixel-art rendered tree"></a>
    <div class="footer-content">
        <p>MechanicalRuby © 2025</p>
        <p>The source code for this site is available on <a href="https://www.github.com/mechanicalruby">GitHub</a>.</p>
    </div>
</footer>

<style>
    p {
        line-height: 1em;
        margin-top: 0.5em;
        margin-bottom: 0.5em;
    }
    img {
        margin: 0em; /* between paragraphs */
    }
    .name {
        margin-top: 1em;
    }
    .footer {
        width: 100%;
        height: 100%;
        background-position: center;
        text-align: center;
        margin-top: 2em;
        opacity: 60%;
    }
    .footer-content {
        margin-bottom: 1.4em;
    }
</style>
