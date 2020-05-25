
export const hideNavbarOnScroll=()=> {
    const prevScrollpos = window.pageYOffset;
    const hideNavbar= () =>{
        const currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
          document.querySelector(".login-div").style.top = "-10%";
          document.querySelector(".header-row").style.top = "-10%";
        } else {
          document.querySelector(".login-div").style.top = "0%";
          document.querySelector(".header-row").style.top = "0%";
        }
        prevScrollpos = currentScrollPos;
      };

    window.onscroll=hideNavbar();
   
  }

  export const f1=()=>{

  window.onscroll =  ()=> scrollFunction();

  const scrollFunction=()=> {

    
    if (
      document.body.scrollTop > 600 ||
      document.documentElement.scrollTop > 600
    ) {
      document.querySelector(".login-div").style.top = "0%";
      document.querySelector(".header-row").style.top = "0%";
    } else {
      document.querySelector(".login-div").style.top = "-20%";
      document.querySelector(".header-row").style.top = "-20%";
    }
  } 
}