import React from 'react';
import './series.css';
import Play from '../../images/Darkplay.svg';

export const Series = (props) => {
  return (
    <div className="seriesmain">
           <p className="seriestext">SERIES</p>
      <div className='row'>
      <div className='series-area'>
 
      <div className="playlist">
        <p className="firsttitle">Text here</p>
        <p className="secondtitle">Text here</p>
        <p className="finaldesc">
          Environmental activist Satish Kumar
          <br /> guides us on a journey that this <br /> Journey
          Surveys
        </p>
        <img alt="" src={Play} className="musicicon" />
      </div>
      </div>
      <div className='slider-area'>
      {props.children}
      </div>
      </div>

    </div>
  );
};
