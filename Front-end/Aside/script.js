    // Select elements
    const menuToggle = document.querySelector('.menu-toggle');
    const closeMenu = document.querySelector('.close-menu');
    const asideMenu = document.querySelector('aside');
    const overlay = document.querySelector('.overlay');

    // Open Menu
    menuToggle.addEventListener('click', () => {
      asideMenu.classList.add('active');
      overlay.classList.add('active');
    });

    // Close Menu
    closeMenu.addEventListener('click', () => {
      asideMenu.classList.remove('active');
      overlay.classList.remove('active');
    });

    // Close when clicking outside
    overlay.addEventListener('click', () => {
      asideMenu.classList.remove('active');
      overlay.classList.remove('active');
    });