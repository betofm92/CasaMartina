let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');


menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

window.addEventListener("load", function(){
    if(this.pageYOffset == 0){
        document.querySelector(".gorditas").style.visibility = "hidden";
        document.querySelector(".home-text").style.visibility = "visible";
    }
})

/*--------------
Sticky Header
---------------*/
window.addEventListener("scroll", function(){
    if(this.pageYOffset > 1){
        document.querySelector(".header").classList.add("sticky");
        document.querySelector(".gorditas").style.visibility = "visible";
        document.querySelector(".home-text").style.visibility = "hidden";
    }
    else{
        document.querySelector(".header").classList.remove("sticky");
        document.querySelector(".gorditas").style.visibility = "hidden";
        document.querySelector(".home-text").style.visibility = "visible";
    }
})


/* --------------menu tabs --------------------*/
const  menuTabs = document.querySelector(".menu-tabs");
menuTabs/addEventListener("click", function(e){
    if(e.target.classList.contains("menu-tab-item") && !e.target.classList.contains("active")){
        const target = e.target.getAttribute("data-target");
        menuTabs.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const menuSection = document.querySelector(".menu-section");
        menuSection.querySelector(".menu-tab-content.active").classList.remove("active");
        menuSection.querySelector(target).classList.add("active");
        console.log(target);
    }
});

/* --------------vino tabs --------------------*/
const  bebidaTabs = document.querySelector(".bebida-tabs");
bebidaTabs/addEventListener("click", function(e){
    if(e.target.classList.contains("bebida-tab-item") && !e.target.classList.contains("active")){
        const target = e.target.getAttribute("data-target");
        bebidaTabs.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const bebidaSection = document.querySelector(".bebida-section");
        bebidaSection.querySelector(".bebida-tab-content.active").classList.remove("active");
        bebidaSection.querySelector(target).classList.add("active");
        console.log(target);
    }
});