import React from 'react';
import renderer from 'react-test-renderer';
import RocketList from '../../components/__mocks__/RocketCard';
import '@testing-library/jest-dom';
import Profile from '../../components/Profile'
import { Provider } from 'react-redux';
import Store from '../configureStore';
import { render } from '@testing-library/react';
import RocketReducer from './rockets';



test('Render Profile', () => {
  const tree = renderer.create(<Provider store={Store}><Profile /></Provider>).toJSON();
  expect(tree).toMatchSnapshot();
});

describe("Rockets Page Test", ()=>{
test('Render Rocket Pages', () => {
    const tree = renderer.create(<Provider store={Store}><RocketList /></Provider>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('There should be "The Falcon 1" as a rocket name', () => {
    const {container}  = render(<Provider store={Store}><RocketList /></Provider>)
    expect(container).toHaveTextContent('The Falcon 1');
  });
  test('There is be a "Reserved" rocket', () => {
    const {container}  = render(<Provider store={Store}><RocketList /></Provider>)
    expect(container).toHaveTextContent('Reserved');
  });
  test('There is be a "Reserved" rocket with a "Cancel Reservation" button', () => {
    const {container}  = render(<Provider store={Store}><RocketList /></Provider>)
    expect(container).toHaveTextContent('Reserved');
    const cancelbtn = container.querySelector('.unreserve-rocket');
    expect(cancelbtn).toHaveTextContent('Cancel Reservation');
  });
})

describe("Rockets Reducer Tests", ()=>{
    test('Test Get Rocket List',()=>{
        const GET_ROCKET="GET_ROCKET"
        const payload=[
            {
                id: 'Falcon 1',
                flickr_images: 'https://imgur.com/DaCfMsj.jpg',
                info: 'The Falcon 1 was an expendable launch system privately.',
                name: 'Falcon 1',
              },
              {
                id: 'Falcon 9',
                flickr_images: 'https://imgur.com/DaCfMsj.jpg',
                info: 'The Falcon 1 was an expendable launch system privately.',
                name: 'Falcon 1',
                
              },
        ]
        const action = { type: GET_ROCKET, payload };
        const result=RocketReducer([],action)
        expect(result).toEqual(payload)
    })
    test('Test Reserve a Rocket',()=>{
        const RESERVE='RESERVE';
        const action={type: RESERVE, payload: 'Falcon 1'}
        const state=[
            {
                id: 'Falcon 1',
                flickr_images: 'https://imgur.com/DaCfMsj.jpg',
                info: 'The Falcon 1 was an expendable launch system privately.',
                name: 'Falcon 1',
              },
              {
                id: 'Falcon 9',
                flickr_images: 'https://imgur.com/DaCfMsj.jpg',
                info: 'The Falcon 1 was an expendable launch system privately.',
                name: 'Falcon 1',
                
              },
        ]
        const newState=[
            {
                id: 'Falcon 1',
                flickr_images: 'https://imgur.com/DaCfMsj.jpg',
                info: 'The Falcon 1 was an expendable launch system privately.',
                name: 'Falcon 1',
                reserved: true,
              },
              {
                id: 'Falcon 9',
                flickr_images: 'https://imgur.com/DaCfMsj.jpg',
                info: 'The Falcon 1 was an expendable launch system privately.',
                name: 'Falcon 1',
                
              },
        ]
        const result=RocketReducer(state,action)
        expect(result).toEqual(newState)
    })
    test('Test Cancel Reservation',()=>{
        const UNRESERVE='UNRESERVE';
        const action= {type: UNRESERVE, payload: 'Falcon 1'}
        const state=[
            {
                id: 'Falcon 1',
                flickr_images: 'https://imgur.com/DaCfMsj.jpg',
                info: 'The Falcon 1 was an expendable launch system privately.',
                name: 'Falcon 1',
                reserved: true,
              },
              {
                id: 'Falcon 9',
                flickr_images: 'https://imgur.com/DaCfMsj.jpg',
                info: 'The Falcon 1 was an expendable launch system privately.',
                name: 'Falcon 1',
                
              },
        ]
        const newState=[
            {
                id: 'Falcon 1',
                flickr_images: 'https://imgur.com/DaCfMsj.jpg',
                info: 'The Falcon 1 was an expendable launch system privately.',
                name: 'Falcon 1',
                reserved: false,
              },
              {
                id: 'Falcon 9',
                flickr_images: 'https://imgur.com/DaCfMsj.jpg',
                info: 'The Falcon 1 was an expendable launch system privately.',
                name: 'Falcon 1',
                
              },
        ]
        const result=RocketReducer(state,action)
        expect(result).toEqual(newState)
    })
})