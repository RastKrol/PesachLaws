"use strict";
const logo1 = document.getElementById("logo1");
const logo2 = document.getElementById("logo2");
const sidebar = document.getElementById("sidebar");
const link_list = sidebar.querySelectorAll("li");
const linkArr = Array.from(link_list);
const sidebar_small = document.getElementById("sidebar-small");
const link_list_small = sidebar_small.querySelectorAll("li");
const linkArrSmall = Array.from(link_list_small);
const erev = document.getElementById("erev");
const trufot = document.getElementById("trufot");
const koshering = document.getElementById("koshering");
const sections = document.querySelectorAll(".section");
const sectionArr = Array.from(sections);
const mybutton = document.getElementById("myBtn");
console.log(linkArr[0].children[0].children[0].innerHTML);
console.log(linkArr[0].classList.contains("side-nav__item--active"));
console.log(sectionArr);

/* ******************************* */
//*FUNCTIONS
/* ******************************* */
const isNotClose = (button) => {
  sections.forEach((item) => {
    if (!item.classList.contains("is-close")) {
      item.classList.add("is-close");
      button.classList.remove("is-close");
    }
  });
};

(function sortUnorderedList(sortDescending) {
  const list = document.getElementById("kosher-list");

  // Get the list items and setup an array for sorting
  const lis = list.getElementsByTagName("LI");
  const vals = [];

  // Populate the array
  for (var i = 0, l = lis.length; i < l; i++) vals.push(lis[i].innerHTML);

  // Sort it
  vals.sort();

  // Sometimes you gotta DESC
  if (sortDescending) vals.reverse();

  // Change the list on the page
  for (var i = 0, l = lis.length; i < l; i++) lis[i].innerHTML = vals[i];
})();

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollIntoView({
    behavior: "smooth",
    block: "start",
  }); // For Safari
  document.documentElement.scrollIntoView({
    behavior: "smooth",
    block: "start",
  }); // For Chrome, Firefox, IE and Opera
}

/* ***************************** */
//*EVENTS
/* ***************************** */

logo1.addEventListener("click", () => {
  if (sidebar_small.classList.contains("is-close")) {
    sidebar_small.classList.toggle("is-close");
    logo1.classList.toggle("is-close");
    logo2.classList.toggle("is-close");
  }
});
logo2.addEventListener("click", () => {
  if (!sidebar_small.classList.contains("is-close")) {
    sidebar_small.classList.toggle("is-close");
    logo1.classList.toggle("is-close");
    logo2.classList.toggle("is-close");
  }
});

const handleClick = (e) => {
  e.preventDefault();
  linkArr.forEach((item) => {
    item.classList.remove("side-nav__item--active");
  });
  e.currentTarget.classList.add("side-nav__item--active");

  linkArrSmall.forEach((item) => {
    item.classList.remove("side-nav__item--active");
  });
  e.currentTarget.classList.add("side-nav__item--active");

  if (typeof e.target.children[0] !== "undefined") {
    if (e.target.children[0].innerHTML === "Эрев Песах") {
      isNotClose(erev);
    }

    if (e.target.children[0].innerHTML === "Законы Лекарств") {
      isNotClose(trufot);
    }

    if (e.target.children[0].innerHTML === "Кошерование посуды") {
      isNotClose(koshering);
    }
  } else {
    if (e.target.textContent === "Эрев Песах") {
      isNotClose(erev);
    }

    if (e.target.textContent === "Законы Лекарств") {
      isNotClose(trufot);
    }

    if (e.target.textContent === "Кошерование посуды") {
      isNotClose(koshering);
    }
  }
};

linkArr.forEach((item) => {
  item.addEventListener("click", handleClick);
});
linkArrSmall.forEach((item) => {
  item.addEventListener("click", handleClick);
});
