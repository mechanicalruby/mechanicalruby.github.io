<script>
	// Define props for the component
	export let name = 'Who?';
	export let username = '@empty';
	export let image_src = '$lib/assets/profile_picture.webp';
	export let image_rendering = 'auto';
	export let route = '#'; // Default route, replace with desired path
</script>

<div class="profile-wrapper">
	<a href={route} class="profile-container">
		<img
			src={image_src}
			alt="{username}'s profile"
			class="profile-picture"
			style="image-rendering: {image_rendering};"
		/>

		<div class="profile-info">
			<div class="name">{name}</div>
			<div class="username">{username}</div>
		</div>
	</a>
</div>

<style>
	.profile-wrapper {
		justify-content: center;
		margin: 1em auto;
		padding: 0.5em;
		background-color: var(--background-color);
		border: 1px solid var(--border-color);
        border-radius: 5px;
        width: fit-content;
        transition: background-color 0.3s ease;
	}

	.profile-container {
		display: flex;
		align-items: center;
		text-decoration: none; /* Remove underline from link */
		color: inherit; /* Keep text color same as surrounding content */
	}

	.profile-picture {
		width: 4.5em;
		border-radius: 0%;
	}

	.profile-info {
		margin-left: 1em;
		margin-right: 0.3em;
		font-size: 1.1em;
	}

	.name {
		font-weight: bold;
	}

	.username {
		color: gray;
	}
</style>
