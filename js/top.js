
// 1. navigation
//

const nav = document.querySelector('nav')
const part1_menu = document.querySelectorAll('#part1 > li')
const part2_menu = document.querySelectorAll('.part2 > li')
const part2_bg = document.querySelector('.part2_bg') 
const part3_bg = document.querySelector('.part3_bg')

//1-1.
part1_menu.forEach(function(target,index){
    target.addEventListener('mouseover',function(){
        if(window.innerWidth > 780){
            part2_bg.style.display = 'block'
            for(let i of part1_menu){i.classList.remove('active')}
            target.classList.add('active')
        }
    })
})

//dep2 
part2_menu.forEach(function(target,index){
    target.addEventListener('mouseover',function(){
        if(window.innerWidth > 780){
            part3_bg.style.display = 'block' 
            for(let i of part2_menu){i.classList.remove('active')}
            target.classList.add('active')
        }
    })
})

//
nav.addEventListener('mouseleave',function(){
    if(window.innerWidth > 780){    
        allHide(part2_bg); allHide(part3_bg);
        for(let i of part1_menu){i.classList.remove('active')}
        for(let i of part2_menu){i.classList.remove('active')}
    }
})

function allHide(target){
    if(target[0] == undefined){ 
        target.style.display = 'none'
    }else{ 
        for(let i of target){i.style.display = 'none'}
    }
}

// 1-2.
const m_menu_btn = document.querySelector('#menu_btn')
const m_nav_bg = document.querySelector('.mobile_nav_bg')
let m_menu_open = false

//
m_menu_btn.addEventListener('click',function(){
    if(m_menu_open == false){ 
        m_menu_open = true
        document.body.classList.add('m_menu_on')
        this.classList.add('active') 
        nav.style.display = 'block'
        m_nav_bg.style.display = 'block'
    }else{ 
        m_menu_open = false
        document.body.classList.remove('m_menu_on')
        this.classList.remove('active') 
        nav.style.display = 'none'
        m_nav_bg.style.display = 'none'
        for(let i of part1_menu){i.classList.remove('active')}
        for(let i of part2_menu){i.classList.remove('active')}
    }
})

// dep1 
part1_menu.forEach(function(target,index){
    target.addEventListener('click',function(){
        if(window.innerWidth <= 780){
            target.classList.add('active')
        }
    })
})
// dep2 
part2_menu.forEach(function(target,index){
    target.addEventListener('click',function(){
        if(window.innerWidth <= 780){
            target.classList.add('active')
        }
    })
})



// 2.mobile search btn

const m_search_btn = document.querySelector('#search_btn')
const search_frm = document.querySelector('#search_frm')
const search_close_btn = document.querySelector('#search_frm .close_btn')

m_search_btn.addEventListener('click',function(e){
    e.preventDefault()
    search_frm.style.height = '56px'
    this.classList.add('active')
})
search_close_btn.addEventListener('click',function(e){
    e.preventDefault()
    search_frm.style.height = '0'
    m_search_btn.classList.remove('active')
})

