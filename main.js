document.addEventListener('DOMContentLoaded', function() {
    var navLinks = document.querySelectorAll('nav ul li a:not(:only-child)');
    var navDropdowns = document.querySelectorAll('.nav-dropdown');
    var html = document.querySelector('html');
    var navToggle = document.getElementById('nav-toggle');
  
    // If a link has a dropdown, add sub menu toggle.
    navLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
        var siblingDropdown = this.nextElementSibling;
        siblingDropdown.style.display = siblingDropdown.style.display === 'none' ? 'block' : 'none';
  
        // Close one dropdown when selecting another
        navDropdowns.forEach(function(dropdown) {
          if (dropdown !== siblingDropdown) {
            dropdown.style.display = 'none';
          }
        });
  
        e.stopPropagation();
      });
    });
  
    // Clicking away from dropdown will remove the dropdown class
    html.addEventListener('click', function() {
      navDropdowns.forEach(function(dropdown) {
        dropdown.style.display = 'none';
      });
    });
  
    // Toggle open and close nav styles on click
    navToggle.addEventListener('click', function() {
      var navUl = document.querySelector('nav ul');
      navUl.style.display = navUl.style.display === 'none' ? 'block' : 'none';
    });
  
    // Hamburger to X toggle
    navToggle.addEventListener('click', function() {
      this.classList.toggle('active');
    });
  });
  