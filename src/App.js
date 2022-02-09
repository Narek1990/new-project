import './App.css';
import { Navbar } from './Components/navbar/Navbar';
import { TopList } from './Components/toplist/TopList';
import { SlideBar } from './Components/slidebar/SlideBar';
import { PlaceHolder } from './Components/placeholder/PlaceHolder';
import { Climate } from './Components/climate/Climate';
import { Series } from './Components/series/Series';
import img1 from './images/Placeholder1.png';
import img2 from './images/Placeholder2.png';
import img3 from './images/Placeholder3.png';
import img4 from './images/Placeholder4.png';
import img5 from './images/Placeholder5.png';
import jpg1 from './images/Rectangle.png';
import jpg2 from './images/Rectangle2.png';
import jpg3 from './images/Rectangle3.png';
import ChevronLeft from './images/chevron-left.svg';
import ChevronRight from './images/chevron-right.svg';
import Slider from 'react-slick';
import seriesimg1 from './images/seriesimg1.png';
import seriesimg2 from './images/seriesimg2.png';
import seriesimg3 from './images/seriesimg3.png';
import popularvideo1 from './images/popularvideo1.png';
import popularvideo2 from './images/popularvideo2.png';

const holderdata = [
  {
    img: img1,
    desc: 'Anatomy of an Artist: Aleksandra Domanović',
  },
  {
    img: img2,
    desc: 'Meet the artists by Art Basel: Bárbara Wagner and Benjamin de Burca',
  },
  {
    img: img3,
    desc: 'Sound & Vision: A Slice of a Dream',
  },
  {
    img: img4,
    desc: 'This title is a Placeholder',
  },
  {
    img: img5,
    desc: 'This title is a Placeholder',
  },
  {
    img: img5,
    desc: 'This title is a Placeholder',
  },
];
const climatedata = [
  {
    title:"MOST WATCHED",
    jpg: jpg1,
    text: 'Environmental activist Satish Kumar guides us on a journey that surveys the grotesqueness and beauty of mankind’s interaction with the planet',
  },
  {
    title:"MOST WATCHED",
    jpg: jpg2,
    text: 'Environmental activist Satish Kumar guides us on a journey that surveys the grotesqueness and beauty of mankind’s interaction with the planet',
  },
  {
    jpg: jpg3,
    text: 'Environmental activist Satish Kumar guides us on a journey that surveys the grotesqueness and beauty of mankind’s interaction with the planet',
  },
];
const populardata = [
  {
    title:"MOST WATCHED",
    popularjpg:popularvideo1,
    parenttitle:"Title goes here",
    populartext:"Environmental activist Satish Kumar guides us on a journey that this journey surveys", 
    
  },
  {
    title:"MOST WATCHED",
    popularjpg:popularvideo2,
    parenttitle:"Title goes here",
    populartext:"Environmental activist Satish Kumar guides us on a journey that this journey surveys", 
    
  }
];
const seriesdata=[
  {
    seriesimg:seriesimg1,
    seriesdesc:"Text here"
  },
  {
    seriesimg:seriesimg2,
    seriesdesc:"Text here"
  },
  {
    seriesimg:seriesimg3,
    seriesdesc:"Text here"
  },
  {
    seriesimg:seriesimg3,
    seriesdesc:"Text here"
  }
]
const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 5.3,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};
const settings2 = {
  dots: false,
  infinite: true,
  speed: 2000,
  slidesToShow: 3.1,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  autoplay: true,
  autoplaySpeed: 2000,

};
function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <img src={ChevronRight} />
    </div>
  );
}
function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <img src={ChevronLeft} />
    </div>
  );
}

function App() {
  return (
    <div>
      <Navbar />
      <TopList />
      <div className="slimContainer">
        <SlideBar />
        <div className="placeholderMain">
          <Slider {...settings}>
            {holderdata.map((item, index) => (
              <PlaceHolder
                index={index}
                key={index}
                img={item?.img}
                desc={item?.desc}
                slideTitle
              />
            ))}
          </Slider>
        </div>
        <p className="Clime">A CLIMATE OF CHANGE</p>
        <div className="climdatamain">
          {climatedata.map((item, index) => (
            <Climate
              index={index}
              key={index}
              jpg={item?.jpg}
              text={item?.text}
              climeTitle
            />
          ))}
        </div>
        <div className='seriescontainer'>
        <Series>
          <Slider {...settings2}>
            {seriesdata.map((item, index) => (
              <PlaceHolder
                index={index}
                key={index}
                img={item?.seriesimg}
                desc={item?.seriesdesc}
              />
            ))}
          </Slider>
          
        </Series>
        </div>
      
         <div className='popularvideos'>
      {populardata.map((item, index) => (
            <Climate
              index={index}
              key={index}
              jpg={item?.popularjpg}
              text={item?.populartext}
              title={item?.title}
              parenttitle={item?.parenttitle}
            />
          ))}
          </div>
          </div>
    </div>
  );
}

export default App;
