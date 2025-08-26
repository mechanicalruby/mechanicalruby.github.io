import { error } from '@sveltejs/kit';

export async function load({ params }) {
	// ugh... relative paths
	const post = await import(`../../../content/blog/${params.slug}/page.md`);
	const content = post.default;

	return {
		title: post.metadata.title,
		date: post.metadata.date,
		content
	};
}
