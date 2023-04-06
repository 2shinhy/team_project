
// 1. navigation
//

const nav = document.querySelector('nav')
const dep1_menu = document.querySelectorAll('#dep1 > li')
const dep2_menu = document.querySelectorAll('.dep2 > li')
const dep2_bg = document.querySelector('.dep2_bg') 
const dep3_bg = document.querySelector('.dep3_bg')

//1-1.
dep1_menu.forEach(function(target,index){
    target.addEventListener('mouseover',function(){
        if(window.innerWidth > 780){
            dep2_bg.style.display = 'block'
            for(let i of dep1_menu){i.classList.remove('active')}
            target.classList.add('active')
        }
    })
})

//dep2 
dep2_menu.forEach(function(target,index){
    target.addEventListener('mouseover',function(){
        if(window.innerWidth > 780){
            dep3_bg.style.display = 'block' 
            for(let i of dep2_menu){i.classList.remove('active')}
            target.classList.add('active')
        }
    })
})

//
nav.addEventListener('mouseleave',function(){
    if(window.innerWidth > 780){    
        allHide(dep2_bg); allHide(dep3_bg);
        for(let i of dep1_menu){i.classList.remove('active')}
        for(let i of dep2_menu){i.classList.remove('active')}
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
        for(let i of dep1_menu){i.classList.remove('active')}
        for(let i of dep2_menu){i.classList.remove('active')}
    }
})

// dep1 
dep1_menu.forEach(function(target,index){
    target.addEventListener('click',function(){
        if(window.innerWidth <= 780){
            target.classList.add('active')
        }
    })
})
// dep2 
dep2_menu.forEach(function(target,index){
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


// 3.filter btn event

const filter = document.querySelector('.filter')
const filter_btn = document.querySelector('#filter_btn')
const filter_reset_btn = document.querySelector('.filter .reset_btn')
const ott = document.querySelectorAll('.ott_list span')
let filter_close = true
let ott_check = false

filter_btn.addEventListener('click',function(){
    if(filter_close){
        filter_close = false
        filter.classList.add('active')
        this.classList.add('active')
    }else{
        filter_close = true
        this.classList.remove('active')
        filter.classList.remove('active')
    }
})

for(let i of ott){
    i.addEventListener('click',function(){
        if(ott_check == false){
            for(let j of ott){j.classList.add('active')}
            ott_check = true
        }
        i.classList.remove('active')
    })
}

filter_reset_btn.addEventListener('click',function(){
    for(let i of ott){i.classList.remove('active')}
    ott_check = false
})