<script>
    import '$lib/styles/styles.css';
    import '$lib/styles/prism-atom-dark.css';
    import { base } from '$app/paths';
</script>

<div class="profile">
	<a href="/" class="profile-info">
		<div class="name"><b>robbie</b> (mechanicalruby)</div>
	</a>
</div>

<hr>

<slot></slot>

<footer class="footer">
    <hr>
    <ul>
        <li><a href="{base}/about">About</a></li>
        :)
        <li><a href="https://www.github.com/mechanicalruby">GitHub</a></li>
        <li><a href="https://bsky.app/profile/mechanicalruby.bsky.social">Bluesky</a></li>
        <li><a href="https://mechanicalruby.itch.io/">itch.io</a></li>
        <li><a href="mailto:robbierocket05@gmail.com">Email</a></li>
        <!-- <li><a href="{base}">RSS</a></li> -->
    </ul>
</footer>

<style>
    p {
        line-height: 1em;
        margin-top: 0.5em;
        margin-bottom: 0.5em;
    }
    
    img {
        object-fit: contain;
        height: 64px;
        width: 100%;
    }

    ul {
        margin: 0 1em 0 1em;
    }

    li {
        display: inline;
        padding: 0.5em;
    }
    
    .footer {
        width: 100%;
        height: 100%;
        background-position: center;
        text-align: center;
        margin-top: 2em;
        margin-bottom: 2em;
        opacity: 60%;
    }

	.profile {
        overflow: auto;
	}

    .profile-info {
        font-size: 1.1em;
        margin-top: 0.5em;
        text-decoration: none;
        float: left;
    }
</style>
