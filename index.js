'use strict'
const logo1 = document.getElementById("logo1");
const logo2 = document.getElementById("logo2");
const sidebar = document.getElementById("sidebar");
const sidebar_small = document.getElementById("sidebar-small");
const link_list = sidebar_small.querySelectorAll('li');
const linkArr = Array.from(link_list);


logo1.addEventListener('click', () => {
  if (sidebar_small.classList.contains("is-close")) {
    sidebar_small.classList.toggle('is-close');
    logo1.classList.toggle("is-close");
    logo2.classList.toggle("is-close");
  } 
})
logo2.addEventListener('click', () => {
  if (!sidebar_small.classList.contains("is-close")) {
    sidebar_small.classList.toggle('is-close');
    logo1.classList.toggle("is-close");
    logo2.classList.toggle("is-close");
  } 
})

const handleClick = (e) => {
  e.preventDefault();
  linkArr.forEach((item) => {
    item.classList.remove("side-nav__item--active");
  });
  e.currentTarget.classList.add("side-nav__item--active");
};

linkArr.forEach((item) => {
  item.addEventListener("click", handleClick);
});