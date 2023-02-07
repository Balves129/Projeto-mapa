class MobileNavBar{
    constructor(mobileMenu, navList, navLinks){
        this.mobileMenu = document.querySelector(this.mobileMenu);
        this.navList = document.querySelector(this.navList)
        this.navLinks = document.querySelectorAll(this.navLinks);
        this.activeClass = "Active"
    
        this.handleClick = this.handleClick.bind(this);
    }
    animateLinks(){
        this.navLinks.forEach((link, index) => {
            console.log(index)
            link.style.animation
            ? (link.style.animation= "")
            : (link.style.animation= "navLinkFade 0.5s ease forwards 0.3s");
        });
    }

    handleClick(){
        this.navList.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent(){
        this.mobileMenu.addEventListener("click", this.handleClick);
    }
    init(){
        if(this.mobileMenu){
            this.addClickEvent();
        }
        return this;
    }
}
const mobileNavBar = new MobileNavBar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);
mobileNavBar.init();