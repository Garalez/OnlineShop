export const loadPosts = async (page) => {
  let result;

  page === null ?
  result = await fetch('https://gorest.co.in/public-api/posts') :
  result = await fetch(`https://gorest.co.in/public-api/posts?page=${page}`);
  const data = await result.json();

  return data;
};

