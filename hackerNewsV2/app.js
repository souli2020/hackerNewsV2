 import RouterHandler from './RouterHandler.js'
  window.onhashchange = () => {
   setActiveLinks();
}

function app () {
     setActiveLinks()
      RouterHandler();
  
}
 
function setActiveLinks(){
     const links = document.querySelectorAll('.header-link');
   links.forEach(link => {
      const linkPath = link.href.split('html')[1];
      const currentPath = window.location.hash;
      if (currentPath === linkPath) {
        link.classList.add('active');  
      } else {
        link.classList.remove('active');         
      }
   });
   
}

 app();