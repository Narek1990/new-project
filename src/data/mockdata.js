import Insta from "../images/insta.svg"
import Facebook from "../images/facebookicon.svg"
import Twitter from "../images/twittericon.svg"
import TIcon from "../images/t-icon.svg"
import DIcon from "../images/d-icon.svg"
import Youtube from "../images/youtube.svg"
import Messenger from "../images/messenger.svg"
import VIcon from "../images/v-icon.svg"
import Rectangle13 from "../images/Rectangle13.png";
import Rectangle14 from "../images/Rectangle14.png";
import FaceIcon from "../images/facebookicon.svg";
import TwitIcon from "../images/twittericon.svg";
import img1 from '../images/Placeholder1.png';
import img2 from '../images/Placeholder2.png';
import img3 from '../images/Placeholder3.png';
import img4 from '../images/Placeholder4.png';
import img5 from '../images/Placeholder5.png';
import jpg1 from '../images/Rectangle.png';
import jpg2 from '../images/Rectangle2.png';
import jpg3 from '../images/Rectangle3.png';
import seriesimg1 from '../images/seriesimg1.png';
import seriesimg2 from '../images/seriesimg2.png';
import seriesimg3 from '../images/seriesimg3.png';
import popularvideo1 from '../images/popularvideo1.png';
import popularvideo2 from '../images/popularvideo2.png';
import ChevronLeft from '../images/chevron-left.svg';
import ChevronRight from '../images/chevron-right.svg';
import Movie1 from "../images/Rectangle18.png";
import Movie2 from "../images/Rectangle19.png";
import Movie3 from "../images/Rectangle20.png";

export const iconsdata = [
    {
        src: Facebook,
        id:1
    },
    {
        src: Twitter,
        id:3
    },
    {
        src: Insta,
        id:5
    },
    {
        src: TIcon,
        id:8
    },
    {
        src: DIcon,
        id:4
    },
    {
        src: Youtube,
        id:2
    },
    {
        src: Messenger,
        id:6
    },
    {
        src: VIcon,
        id:7
    },
]

export const additionaldata=[
    {
        title:"BECOME A MEMBER"
    },
    {
        title:"ABOUT US"
    },
    {
        title:"CONTACT US"
    },
    {
        title:"PRIVACY"
    },
    {
        title:"TERMS OF SERVICE"
    },
    {
        title:"BECOME A CONTRIBUTOR"
    },
    {
        title:"SITE PARTNERS"
    },
    {
        title:"RSS"
    },
]

export const socialdata=[
    {
      img:Rectangle14,
      icon:FaceIcon,
      button:"LIKE"
    },
    {
      img:Rectangle13,
      icon:TwitIcon,
      button:"SUBSCRIBE"
    }
  ]
  export const holderdata = [
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
  export const climatedata = [
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
  export const populardata = [
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
  export const seriesdata=[
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
  export const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5.3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  export const settings2 = {
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
        <img alt='' src={ChevronRight} />
      </div>
    );
  }
  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <img alt='' src={ChevronLeft} />
      </div>
    );
  }
  export const filmdata=[
    {
  img:Movie1
    },
    {
      img:Movie2
        },
        {
          img:Movie3
            }
  ]