import React from 'react';

const rockets = [

  {
    id: 'Falcon 1',
    reserved: true,
    flickr_images: 'https://imgur.com/DaCfMsj.jpg',
    info: 'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.',
    name: 'Falcon 1',
  },
  {
    id: 'Falcon 9',
    reserved: false,
    flickr_images: 'https://imgur.com/DaCfMsj.jpg',
    info: 'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.',
    name: 'Falcon 1',

  },
  {
    id: 'Falcon 2',
    reserved: true,
    flickr_images: 'https://imgur.com/DaCfMsj.jpg',
    info: 'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.',
    name: 'Falcon 1',
  },
];

const RocketList = () => (
  rockets.map((element) => (
    <div className="rocket-card" key={element.id} id={element.id}>
      <img className="img-rocket" src={element.flickr_images} alt="rocket" />
      <div className="rocket-div">
        <p className="name-rocket">{element.name}</p>
        <p className="info-rocket">
          {element.reserved && (<span className="reserved-badge">Reserved</span>)}
          {element.info}
        </p>
        {(element.reserved === false || element.reserved === undefined)
          ? <button className="reserve-rocket" type="button">Reserve Rocket</button>
          : <button className="unreserve-rocket" type="button">Cancel Reservation</button>}
      </div>
    </div>
  ))
);

export default RocketList;
