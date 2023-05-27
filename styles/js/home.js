document.addEventListener('DOMContentLoaded', function() {
 
    const icon = document.getElementById('icon');
    const menuContainer = document.querySelector('.menu-container');

    icon.addEventListener('click', () => {
    if (icon.classList.contains('fa-bars')) {
        icon.classList.remove('fa-bars')
        icon.classList.add('fa-close')

        //menu-container

        menuContainer.classList.remove('hide')
        menuContainer.classList.add('show')

    }else{

        icon.classList.add('fa-bars')
        icon.classList.remove('fa-close')
        //menu-container
        menuContainer.classList.remove('show')
        menuContainer.classList.add('hide')

    }

    })
    
  });

