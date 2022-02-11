import React from 'react'
import { SlideBar } from '../../Components/slidebar/SlideBar';
import { PlaceHolder } from '../../Components/placeholder/PlaceHolder';
import { Climate } from '../../Components/climate/Climate';
import { Series } from '../../Components/series/Series';
import Slider from 'react-slick';
import { Social } from "../../Components/social/Social";
import { Conections } from '../../Components/socialconections/Conections';
import { MakeFilm } from '../../Components/makefilm/MakeFilm';
import { socialdata, holderdata, climatedata, populardata, seriesdata, settings, settings2, filmdata } from '../../data/mockdata';

export const HomePage = () => {
    return (
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
            <div className='socialContainer'>
                {socialdata.map((item, index) => (
                    <Social
                        index={index}
                        key={index}
                        img={item?.img}
                        icon={item?.icon}
                        button={item?.button}

                    />
                ))}
            </div>
            <Conections />
            <p className='makefilmtitle'>MORE TO LOVE</p>
            <div className='makefilmmain'>
                {filmdata.map((item, index) => (
                    <MakeFilm
                        index={index}
                        key={index}
                        img={item?.img}
                    />
                ))}
            </div>

        </div>
    )
}
