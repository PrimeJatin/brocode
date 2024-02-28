function Loginfunction() {
    const wrapper = document.querySelector('.wrapper');
    const loginLink = document.querySelector('.login-link');
    const registerLink = document.querySelector('.register-link');
    const btnPopup = document.querySelector('.btnLogin-popup');
    const iconClose = document.querySelector('.icon-close');
    const topElement = document.querySelector('.top');
    // const sideBar = document.querySelector('.sidebar');
    // const closeicon = document.querySelector('.form-close-icon');
    

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
}
Loginfunction();
