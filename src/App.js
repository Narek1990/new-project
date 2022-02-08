
import './App.css';
import {Navbar} from './Components/navbar/Navbar'
import {TopList} from './Components/toplist/TopList'
import {SlideBar} from "./Components/slidebar/SlideBar"
import {PlaceHolder} from "./Components/placeholder/PlaceHolder"
import {Climate} from "./Components/climate/Climate"
import {Series} from "./Components/series/Series"
import img1 from "./images/Placeholder1.png"
import img2 from "./images/Placeholder2.png"
import img3 from "./images/Placeholder3.png"
import img4 from "./images/Placeholder4.png"
import img5 from "./images/Placeholder5.png"
import jpg1 from "./images/Rectangle.png"
import jpg2 from "./images/Rectangle2.png"
import jpg3 from "./images/Rectangle3.png"
import Slider from "react-slick";

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
  },
  {
    img:img5,
    desc:"This title is a Placeholder"
  }
]
const climatedata= [
  {
    jpg:jpg1,
    text:"Environmental activist Satish Kumar guides us on a journey that surveys the grotesqueness and beauty of mankind’s interaction with the planet"
  },
  {
    jpg:jpg2,
    text:"Environmental activist Satish Kumar guides us on a journey that surveys the grotesqueness and beauty of mankind’s interaction with the planet"
  },
  {
    jpg:jpg3,
    text:"Environmental activist Satish Kumar guides us on a journey that surveys the grotesqueness and beauty of mankind’s interaction with the planet"
  }
]
const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 5.3,
  slidesToScroll: 1,
  // nextArrow: <SampleNextArrow />,
  // prevArrow: <SamplePrevArrow />
};
// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, background: "red", color:"white" }}
//       onClick={onClick}
//     />
//   );
// }
// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "green" }}
//       onClick={onClick}
//     />
//   );
// }




function App() {
  return (
   <div>
    
    <Navbar/>
    <TopList/>
    <div className='slimContainer'>
      <SlideBar/>
    {/* <div className='placeholderMain'> */}
    <Slider {...settings}>

    {holderdata.map((item,index)=> (
        <PlaceHolder index={index} key={index} img={item?.img} desc={item?.desc} />
      ))}
      </Slider>
      {/* </div> */}
      <p className="Clime">A CLIMATE OF CHANGE</p>
      <div className="climdatamain">
      {climatedata.map((item,index)=> (
        <Climate index={index} key={index} jpg={item?.jpg} text={item?.text} />
      ))}
      </div>
      <Series/>
    </div>
    
    </div>  
  );
}

export default App;
