function Loginfunction() {
    const wrapper = document.querySelector('.wrapper');
    const loginLink = document.querySelector('.login-link');
    const registerLink = document.querySelector('.register-link');
    const btnPopup = document.querySelector('.btnLogin-popup');
    const iconClose = document.querySelector('.icon-close');
    const topElement = document.querySelector('.top');
    const sideBar = document.querySelector('.sidebar');
    const closeicon = document.querySelector('.form-close-icon');
    

    registerLink.addEventListener('click',()=>{
        wrapper.classList.add('active');
    });
    loginLink.addEventListener('click',()=>{
        wrapper.classList.remove('active');
    });

    btnPopup.addEventListener('click',()=>{
        wrapper.classList.add('active-popup');
    });

    iconClose.addEventListener('click',()=>{
        wrapper.classList.remove('active-popup');
    });
    
    closeicon.addEventListener('click',()=>{
        wrapper.classList.remove('active-popup');
        closeicon.style.opacity="0";
        closeicon.style.pointerEvents="none";
    });
    btnPopup.addEventListener('click',()=>{
        closeicon.style.pointerEvents="all";
        topElement.style.opacity="0";
        closeicon.style.opacity="1";
        closeicon.style.transform = "scale(1))";
    });

    iconClose.addEventListener('click',()=>{
        topElement.style.opacity="1";
    });

    btnPopup.addEventListener('click',()=>{
        sideBar.style.opacity="0";
    });

    iconClose.addEventListener('click',()=>{
        sideBar.style.opacity="1";
    });

    
}
Loginfunction();
