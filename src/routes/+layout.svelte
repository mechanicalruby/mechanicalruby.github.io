<script>
    import "@fontsource/lexend"; // Defaults to weight 400
    import "@fontsource/open-sans";
    import '$lib/styles/styles.css';
    import '$lib/styles/prism-base16-ateliersulphurpool.light.css';

    import ProfilePicture from "$lib/components/ProfilePicture.svelte";
    import profile_picture from '$lib/assets/profile/ross_rust.png'
</script>

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
    <div class="footer-content">
        <p>Get some good sleep tonight!</p>
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
        object-fit: cover;
        height: 5em;
        width: 100%;
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
