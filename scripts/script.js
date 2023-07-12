;(function () {
    window.addEventListener('scroll', changeNagation)
    const conteiner_link_navbar = document.querySelector('.conteiner_link_navbar')
    let links = conteiner_link_navbar.querySelectorAll('li a')

    function changeNagation(){
        let position = [...links].map(link=>{
            let href = link.getAttribute('href')
            let h2 = document.querySelector(href)

            return h2.getBoundingClientRect().top
        })

        let activeLink = getLastLinkview(position)
        let menuActive = conteiner_link_navbar.querySelector('.active')
    
        if(menuActive){
            menuActive.classList.remove('active')
        } 
        if(activeLink){
            activeLink.classList.add('active')
        }else{
            links[0].classList.add('active')
        }
    }
    function getLastLinkview(_positions){
        let positionElement_zero = _positions.filter(elements => elements < innerHeight/2)

        return links[positionElement_zero.length - 1]   
    }
    changeNagation()



    const menu_burger = document.querySelector('#menu_burger')
    menu_burger.addEventListener('click', showMenu)
    function showMenu(){
        const conteiner_link_navbar = document.querySelector('.conteiner_link_navbar')
        if(conteiner_link_navbar.style.display == 'none'){
            conteiner_link_navbar.style.display = 'block'
        }else{
            conteiner_link_navbar.style.display = 'none'
        }
    }
    document.addEventListener('DOMContentLoaded', function(){
        verificationMediaScreen()
    })
    window.addEventListener('resize', verificationMediaScreen)
    function verificationMediaScreen(){
        if(window.innerWidth <= 800){
            menu_burger.style.display = 'block'
        }else{
            menu_burger.style.display = 'none'
        }
    }

   


    const btn_more = [...document.querySelectorAll('.btn_more')]
    btn_more.forEach(btnMore=>{
        btnMore.addEventListener('click', showMoreText)

    })
    function showMoreText(event){
        const btn_info = event.target
        const moreInfo = event.target.nextElementSibling
        console.log(moreInfo)
        if(moreInfo.style.display == 'none'){
            moreInfo.style.display = 'block'
            btn_info.textContent = 'Mostrar menos'
        }else{
            moreInfo.style.display = 'none'
            btn_info.textContent = 'Mostrar mais'
        }    
    }
})()