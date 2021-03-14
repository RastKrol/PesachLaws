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

// (function sortList() {
//   let list, i, switching, b, shouldSwitch;
//   list = document.getElementById("kosher-list");
//   switching = true;
//   /* Make a loop that will continue until
//       no switching has been done: */
//   while (switching) {
//     // start by saying: no switching is done:
//     switching = false;
//     b = list.getElementsByTagName("LI");
//     // Loop through all list-items:
//     for (i = 0; i < b.length - 1; i++) {
//       // start by saying there should be no switching:
//       shouldSwitch = false;
//       /* check if the next item should
//           switch place with the current item: */
//       if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
//         /* if next item is alphabetically
//             lower than current item, mark as a switch
//             and break the loop: */
//         shouldSwitch = true;
//         break;
//       }
//     }
//     if (shouldSwitch) {
//       /* If a switch has been marked, make the switch
//           and mark the switch as done: */
//       b[i].parentNode.insertBefore(b[i + 1], b[i]);
//       switching = true;
//     }
//   }
// })();

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
