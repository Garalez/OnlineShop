export const loadPosts=async t=>{let s;s=null===t?await fetch("https://gorest.co.in/public-api/posts"):await fetch(`https://gorest.co.in/public-api/posts?page=${t}`);return await s.json()};
//# sourceMappingURL=../../maps/modules/data.js.map
