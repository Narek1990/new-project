
import './App.css';
import {Navbar} from './Components/navbar/Navbar'
import {TopList} from './Components/toplist/TopList'
import {SlideBar} from "./Components/slidebar/SlideBar"
import {PlaceHolder} from "./Components/placeholder/PlaceHolder"
function App() {
  return (
   <div>
    
    <Navbar/>
    <TopList/>
    <div className='slimContainer'><SlideBar/>
    <PlaceHolder/>
    </div>
    </div>  
  );
}

export default App;
