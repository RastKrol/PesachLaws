'use strict'
const logo1 = document.getElementById("logo1");
const logo2 = document.getElementById("logo2");
const sidebar = document.getElementById("sidebar");
const sidebar_small = document.getElementById("sidebar-small");
const link_list = sidebar_small.querySelectorAll('li');
const linkArr = Array.from(link_list);
const erev = document.getElementById('erev');
const trufot = document.getElementById('trufot');
console.log(linkArr[0].children[0].children[0].innerHTML) ;


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

/*   function composedPath(el)  {
    const path = [];

    while (el) {
      path.push(el);

      if (el.tagName === "HTML") {
        path.push(document);
        path.push(window);

        return path[0];
      }

      el = el.parentElement;
    }
  } */

  if (
    // e.path[0].innerHTML === "Эрев Песах" 
    e.path[0].children[0].innerHTML === "Эрев Песах"
  ) {
    if (erev.classList.contains("is-close")) {
      erev.classList.remove("is-close");
      trufot.classList.add("is-close");
    } else {
      trufot.classList.add("is-close");
      erev.classList.remove("is-close");
    }
  }

  if (
    // e.path[0].innerHTML === "Законы Лекарств" 
    e.path[0].children[0].innerHTML === "Законы Лекарств"
  ) {
    if (trufot.classList.contains("is-close")) {
      trufot.classList.remove("is-close");
      erev.classList.add("is-close");
    } else {
      trufot.classList.add("is-close");
      erev.classList.remove("is-close");
    }
  }
};

linkArr.forEach((item) => {
  item.addEventListener("click", handleClick);
});