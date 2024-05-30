// URL de la API de publicaciones de blog
const apiUrl = 'http://localhost:3000/api/posts';


async function fetchPosts() {
  try {
    const response = await fetch(apiUrl);
    const posts = await response.json();
    return posts;
  } catch (error) {
    console.error('Error al obtener las publicaciones:', error);
    return [];
  }
}

function renderPosts(posts) {
  const postsContainer = document.getElementById('contenedor');
  postsContainer.innerHTML = ''; 

  posts.forEach(post => {
    const postElement = document.createElement('div');
    postElement.classList.add('post');
    postElement.innerHTML = `
      <h3>${post.title}</h3>
      <p>${post.content}</p>
    `;
    postsContainer.appendChild(postElement);
  });
}

async function main() {
  const posts = await fetchPosts();
  renderPosts(posts);
}

window.addEventListener('load', main);