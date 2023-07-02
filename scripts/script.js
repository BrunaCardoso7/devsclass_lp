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


    function showMoreText(){
        const tecnology_used = [...document.querySelectorAll('.tecnology_used')]
        console.log(tecnology_used)
        tecnology_used.forEach(moreInfo=>{
            console.log(moreInfo.target)
            if(moreInfo.style.display == 'none'){
                moreInfo.style.display = 'block'
            }else{
                moreInfo.style.display = 'none'
            }    
        })
    }

})()