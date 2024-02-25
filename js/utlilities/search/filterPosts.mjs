export function sortPostsNewestFirst(posts) {
  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function sortPostsOldestFirst(posts) {
  return posts.sort((a, b) => new Date(a.date) - new Date(b.date));
}
