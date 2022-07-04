import stories from './pages/stories.js';
import Item from "./pages/Item.js";
import Favorites from './pages/Favorites.js';
 
import Story from "../components/Story.js"
const router = new Navigo( null, true, '#');
   
 
export default function RouterHandler () {

    const routes = [
        
        { path: '/', page: stories },
        { path: '/', page: stories },
        { path: '/new', page: stories },
        { path: '/ask', page: stories },
        { path: '/show', page: stories },
        { path: '/item', page: Item },
         { path: '/favorites', page: Favorites }
      
    ];
     
    routes.forEach((route) => {
      router.on(route.path, () => {route.page(route.path)}).resolve();
    })
   
   
  }  
  
   
  

