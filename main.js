const blogPosts = [
  {
    title: 'First Blog Post',
    content: 'This is my first blog post!',
  },
  {
    title: 'Second Blog Post',
    content: 'This is my second blog post!',
  },
  {
    title: 'Third Blog Post',
    content: 'This is my third blog post!',
  },
];

function generateBlogPostList(posts) {
  const postList = document.createElement('ul');

  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];

    const listItem = document.createElement('li');
    const postLink = document.createElement('a');
    postLink.textContent = post.title;
    postLink.href = '#'; // Replace with actual post URL
    listItem.appendChild(postLink);

    const postContent = document.createElement('p');
    postContent.textContent = post.content;
    listItem.appendChild(postContent);

    postList.appendChild(listItem);
  }

  return postList;
}

const postContainer = document.querySelector('.post-container');
const postList = generateBlogPostList(blogPosts);
postContainer.appendChild(postList);
