let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
  navbar.classList.toggle('active');
  searchForm.classList.remove('play');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
  searchForm.classList.toggle('play');
  navbar.classList.remove('active');
}

window.onscroll = () => {
  navbar.classList.remove('active');
  searchForm.classList.remove('play');
}