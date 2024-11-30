// Get the necessary DOM elements
const menuBtn = document.getElementById('menuBtn');  // Menu button
const navlist = document.querySelector('.header .navlist');  // Navlist container

// Function to check screen width and toggle visibility
function toggleNavbar() {
  if (window.innerWidth <= 836) {
    // Show the menu button and hide the navbar links by default
    menuBtn.style.display = 'block';
    navlist.classList.add('hidden'); // Hide the navlist initially
  } else {
    // On larger screens, show the navbar links and hide the menu button
    menuBtn.style.display = 'none';
    navlist.classList.remove('hidden'); // Show the navlist on larger screens
  }
}

// Function to toggle the navbar when the menu button is clicked
function toggleMenu() {
  // Toggle the visibility of the navlist (navbar links)
  navlist.classList.toggle('hidden');
  
  // Ensure navlist is in a block display and styled as a box when visible
  if (!navlist.classList.contains('hidden')) {
    navlist.style.display = 'block'; // Display the navlist as block
    navlist.classList.add('navlist-box'); // Add box style class
  } else {
    navlist.style.display = 'none'; // Hide the navlist
    navlist.classList.remove('navlist-box'); // Remove box styling when hidden
  }
}

// Event listener for window resize to check screen width
window.addEventListener('resize', toggleNavbar);

// Event listener for menu button click to toggle navbar visibility
menuBtn.addEventListener('click', toggleMenu);

// Initial check when the page loads
toggleNavbar();
