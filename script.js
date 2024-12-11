function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Get the button
const scrollTopBtn = document.getElementById("scrollTopBtn");

// Show the button when the user scrolls down 300px from the top of the page
window.onscroll = function() {
if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
scrollTopBtn.style.display = "block";
} else {
scrollTopBtn.style.display = "none";
}
};

// Scroll to the top of the page when the user clicks the button
function scrollToTop() {
window.scrollTo({
top: 0,
behavior: 'smooth'
});
}
