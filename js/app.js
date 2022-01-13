(function (){
    let  socials=document.querySelectorAll('.social div')
    socials.forEach(function(social,index){
        social.style.animation=`moveIn .6s cubic-bezier(.51,.92,.24,1.15) forwards ${index/7+0.2}s`;
    })
    
    let rocketPeices = document.querySelectorAll('.rocket-body span')

    let rocket = document.querySelector('.rocket')

    let triggerStart = window.innerHeight / 5;

    let rocketOffsetTop = rocket.offsetTop;

    document.addEventListener('scroll',(e)=>{
        if(window.scrollY > rocketOffsetTop- triggerStart){
            rocketPeices[0].classList.add('active')
            rocketPeices[1].classList.add('active')

        }else {
            rocketPeices[0].classList.remove('active')
            rocketPeices[1].classList.remove('active')
        }
    })

    let thirdOffsetTop = rocketPeices[2].offsetTop;

    document.addEventListener('scroll',(e)=>{
        if(window.scrollY > thirdOffsetTop - triggerStart){
            rocketPeices[2].classList.add('active');
        }
        else {
            rocketPeices[2].classList.remove('active');
        }
    })
}())