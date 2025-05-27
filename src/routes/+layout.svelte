<script>
    import "@fontsource/lexend"; // Defaults to weight 400
    import "@fontsource/red-hat-display";
    import '$lib/styles/styles.css';
    import '$lib/styles/prism-base16-ateliersulphurpool.light.css';

    import ProfilePicture from "$lib/components/ProfilePicture.svelte";
    import profile_picture from '$lib/assets/profile/new_avatar_blue.webp'
</script>

<div class="color-strip"/>

<div class="nameplate"> 
    <ProfilePicture
        name="Robbie"
        username="@mechanicalruby"
        image_src={profile_picture}
        image_rendering="auto"
        route="/"
    />
</div>

<slot></slot>

<footer class="footer">
    <div class="character-row">
        <!-- add a row of images here -->
    </div>
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
    .color-strip {
        width: 100%;
        height: 1em;
        background-color: var(--accent-color);
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
    }
    .nameplate {
        width: 100%;
    }
    .footer {
        margin-top: 2em;
        width: 100%;
        height: 100%;
        background-position: center;
        text-align: center;
        opacity: 60%;
    }
    .character-row {
        padding: 0em;
    }
    .footer-content {
        margin-bottom: 1.4em;
    }
</style>
