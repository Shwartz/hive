export const prerender = true;
import type { Post } from '$lib/types';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export async function load({ fetch }) {
  const response = await fetch('api/posts');
  const posts: Post[] = await response.json();
  return { posts };
}
