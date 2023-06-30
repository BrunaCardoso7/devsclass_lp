;(function () {
    const menu_burger = document.querySelector('#menu_burger')
    menu_burger.addEventListener('click', showMenu)


    function showMenu(){
        const conteiner_link_navbar = document.querySelector('.conteiner_link_navbar')
        conteiner_link_navbar.classList.toggle('active')
           
    }
})()