document.addEventListener("DOMContentLoaded", function () {
    const toggleNavButton = document.getElementById("toggleNav");
    const navbar = document.getElementById("navigation-list");
    const icon = toggleNavButton.querySelector("i");
    const links = document.querySelectorAll(".nav-link");
  
    // Function to toggle the navigation menu and icon
    function toggleNavbar() {
      if (navbar.style.display === "block") {
        navbar.style.display = "none";
        icon.classList.remove("fa-chevron-up");
        icon.classList.add("fa-chevron-down");
      } else {
        navbar.style.display = "block";
        icon.classList.remove("fa-chevron-down");
        icon.classList.add("fa-chevron-up");
      }
    }
  
    // Add a click event listener to the button
    toggleNavButton.addEventListener("click", toggleNavbar);
  
    // Add click event listeners to each link to hide the menu when a link is clicked
    links.forEach(function (link) {
      link.addEventListener("click", toggleNavbar);
    });
  });
  