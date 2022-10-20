/* ----- 1) Transparent Header on first section after that header will has background-------************ */           

window.addEventListener('scroll', () => {
    let scrollValue = window.scrollY;
    if (scrollValue > 946) {
        document.querySelector('header').classList.add('newbackground');
    } else {
        document.querySelector('header').classList.remove('newbackground');
    }
})



/*--- 2)  scroll to section ---- */ 
document.querySelectorAll('a[href^="#"]').forEach((el) => {
    el.onclick = (e) => {
        e.preventDefault();
        document.querySelector(el.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    }
});




let switcherList = document.querySelectorAll(".switcher li");
let imgs = Array.from(document.images);

console.log(imgs);










/* ---4)  Scroll Top ----*/ 
let fixed_btn = document.querySelector('.fixed-btn');

window.onscroll = (e) => {
    if (window.scrollY > 180) { 
        fixed_btn.style.right = '20px';

    }else{
        fixed_btn.style.right = '-200px';

    }
}


fixed_btn.onclick = () => {
    console.log(scrollY.valueOf());
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}