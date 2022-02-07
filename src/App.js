
import './App.css';
import {Navbar} from './Components/navbar/Navbar'
import {TopList} from './Components/toplist/TopList'
import {SlideBar} from "./Components/slidebar/SlideBar"
import {PlaceHolder} from "./Components/placeholder/PlaceHolder"
import {Climate} from "./Components/climate/Climate"
import img1 from "./images/Placeholder1.png"
import img2 from "./images/Placeholder2.png"
import img3 from "./images/Placeholder3.png"
import img4 from "./images/Placeholder4.png"
import img5 from "./images/Placeholder5.png"
const holderdata = [
  {
    img:img1,
    desc: 'Anatomy of an Artist: Aleksandra Domanović'
  },
  {
    img:img2,
    desc:"Meet the artists by Art Basel: Bárbara Wagner and Benjamin de Burca"
  },
  {
    img:img3,
    desc:"Sound & Vision: A Slice of a Dream"
  },
  {
    img:img4,
    desc:"This title is a Placeholder"
  },
  {
    img:img5,
    desc:"This title is a Placeholder"
  }
]
function App() {
  return (
   <div>
    
    <Navbar/>
    <TopList/>
    <div className='slimContainer'>
      <SlideBar/>
    <div className='placeholderMain'>
    {holderdata.map((item,index)=> (
        <PlaceHolder index={index} key={index} img={item?.img} desc={item?.desc} />
      ))}
      </div>
      <Climate/>
    </div>
    
    </div>  
  );
}

export default App;
