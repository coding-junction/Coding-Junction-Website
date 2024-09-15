import React from 'react';
import './ComPrtn.css';
import Marquee from 'react-fast-marquee';
import prtnArr from './PrtnArray.json';

function ComPrtn() {
  const prtn = prtnArr.PrtnArray;

  return (
    <div className='comprtn'>
      <div className="comprtn-head">
        <h1>Community Partners</h1>
      </div>
      <Marquee speed={100}>
        {prtn.map((pt, i) => (
          <div key={i} className="p-img-container">
            <img className="p-img" src={pt.img} alt={pt.name} />
            <div className="p-name">{pt.name}</div>
          </div>
        ))}
      </Marquee>
    </div>
  );
}

export default ComPrtn;
