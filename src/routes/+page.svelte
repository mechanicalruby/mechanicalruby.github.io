<script>
    import { base } from '$app/paths';
    import preview from '$lib/assets/preview.jpeg'
</script>

<meta property="og:title" content="MechanicalRuby"/>
<meta property="og:description" content="MechanicalRuby's blog"/>
<meta property="og:image" content={preview}/>
<meta property="og:type" content="website"/>

<div class="page">
    <p>
        I'm a software developer/visual artist on the Internet.
    </p>

    <h3>Currently</h3>
    <p> 
        Enthusiastically working on my big project for the year!
    </p>

    <h3>Blog posts</h3>
    <ul>
        <li><a href="{base}/blog/the-first-redesign/">The first redesign</a> - 25 Aug 2025</li>
        <li><a href="{base}/blog/a-new-path/">Hello, world!</a> - 29 Apr 2025</li>
    </ul>

    <h3>Miscellaneous</h3>
    <ul>
        <li><a href="{base}/links/">Websites I like</a></li>
        <li><a href="{base}/media/">Media I'm enjoying</a></li>
        <li><a href="{base}/uses/">Things I'm using</a></li>
        <li><a href="{base}/log/">Site changelog</a></li>
    </ul>
</div>

<style>
    a {
        color: var(--text-color);
        text-underline-offset: 0.2em;
        text-decoration-color: #FFFFFF80;
    }
    br {
        display: block;
        margin: 8px 0;
        line-height: 1em;
    }
</style>
