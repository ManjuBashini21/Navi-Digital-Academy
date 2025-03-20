document.addEventListener("DOMContentLoaded", function () {
// sticky header related funtionality
stickystickyHeader();

// dropdown functionalities
dropdownController();

// tab related funtioanlities
tabsController();

// mobile menu related funtionality
mobileMenu();

// accorfion related funtionality
accordions();

// project filter related funtionality
filter();

//hover effect parallex
VanillaTilt.init(document.querySelectorAll(".tilt"), {
  perspective: 2000,
});

// counter up
const counters = document.querySelectorAll(".counter");
counters.forEach((counter) => {
  new countUp(counter);
});
// quick view modal
modalProductDetails();

// video modal
videoModal();

// theme mode controller
theme();

//preloader
preloader();

// scroll up
scrollUp();

// swiper slider
slider();
// AOS Scroll Animation

AOS.init({
  offset:  0,
  duration: 1000,
  once: true,
  easing: "ease",
});

// images popup
popup();

// count down
countDown();

// charts
lineChart();
pieChart();

// click count
count();

// // smooth scroll
smoothScroll();


})


// document.addEventListener("DOMContentLoaded", function () {
//   const formContainer = document.getElementById("formContainer");
//   const openFormBtns = document.querySelectorAll("#openFormBtn1, #openFormBtn2");
//   const closeFormBtn = document.getElementById("closeFormBtn");

//   function showForm() {
//     formContainer.style.display = "flex"; // Show popup with black overlay
//   }

//   function closeForm() {
//     formContainer.style.display = "none"; // Hide popup
//   }

//   openFormBtns.forEach(btn => btn.addEventListener("click", showForm));
//   closeFormBtn.addEventListener("click", closeForm);
// });

document.addEventListener("DOMContentLoaded", function () {
  const studentFormContainer = document.getElementById("studentFormContainer");
  const staffFormContainer = document.getElementById("staffFormContainer");

  const openStudentFormBtn = document.getElementById("openStudentFormBtn");
  const openStaffFormBtn = document.getElementById("openStaffFormBtn");

  const closeStudentFormBtn = document.getElementById("closeStudentFormBtn");
  const closeStaffFormBtn = document.getElementById("closeStaffFormBtn");

  // Open Student Form
  openStudentFormBtn.addEventListener("click", function (event) {
      event.preventDefault();
      studentFormContainer.style.display = "flex";
  });

  // Open Staff Form
  openStaffFormBtn.addEventListener("click", function (event) {
      event.preventDefault();
      staffFormContainer.style.display = "flex";
  });

  // Close Student Form
  closeStudentFormBtn.addEventListener("click", function () {
      studentFormContainer.style.display = "none";
  });

  // Close Staff Form
  closeStaffFormBtn.addEventListener("click", function () {
      staffFormContainer.style.display = "none";
  });

  // Close forms when clicking outside the form box
  studentFormContainer.addEventListener("click", function (event) {
      if (event.target === studentFormContainer) {
          studentFormContainer.style.display = "none";
      }
  });

  staffFormContainer.addEventListener("click", function (event) {
      if (event.target === staffFormContainer) {
          staffFormContainer.style.display = "none";
      }
  });
});
