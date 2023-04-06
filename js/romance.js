
//r1_top10 
const r1_list = document.querySelector('.r1_list_container')
const r1_prev_btn = document.querySelector('#r1_bg .prev_btn')
const r1_next_btn = document.querySelector('#r1_bg .next_btn')

let r1_move = 0
let show_slides 
let move_percent
let r1_move_max

r1_next_btn.addEventListener('click',function(e){
    e.preventDefault() 
    r1_responsive() 
    if(r1_move < r1_move_max) {
        if(r1_move == 0){r1_prev_btn.style.display = 'flex'}
        r1_move ++
        r1_list.style.left = `-${move_percent*r1_move}%`
        if(r1_move == r1_move_max) {r1_next_btn.style.display = 'none'}
    }
})

r1_prev_btn.addEventListener('click',function(e){
    e.preventDefault()
    r1_responsive()
    if(r1_move > 0) {
        if(r1_move == r1_move_max){r1_next_btn.style.display = 'flex'}
        r1_move --
        r1_list.style.left = `-${move_percent*r1_move}%`
        if(r1_move == 0) {r1_prev_btn.style.display = 'none'}
    }
})


function r1_responsive(){ 
    if(window.innerWidth > 1100){show_slides=5;}
    else if(window.innerWidth > 880){show_slides=4;}
    else if(window.innerWidth > 650){show_slides=3;}
    else{show_slides=2;}
    move_percent = 100/show_slides
    r1_move_max = 10 - show_slides
}

window.addEventListener('resize',function(){
    r1_move = 0
    r1_prev_btn.style.display = 'none'
    r1_list.style.left = 0
})



//r1_top1 

const r1_ranking = document.querySelectorAll('#r1_list .poster')
let create_p
r1_ranking.forEach(function(target,index){
    create_p = document.createElement('p')
    create_p.innerHTML = index+1
    target.appendChild(create_p)
})