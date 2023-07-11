;(function () {

  

    const menu_burger = document.querySelector('#menu_burger')
    menu_burger.addEventListener('click', showMenu)
    function showMenu(){
        const conteiner_link_navbar = document.querySelector('.conteiner_link_navbar')
        conteiner_link_navbar.classList.toggle('active')
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