import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import configureStore from '../redux/configureStore';
import Header from './Header';
import Missions from './Missions';
import Mission from './Mission';

test('Header renders correctly', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

test('Missions renders correctly', () => {
  const tree = renderer
    .create(<Provider store={configureStore}><Missions /></Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

test('Mission renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={configureStore}>
        <Mission key="FF3864" id="FF3864" name="Mission1" description="Description1" member={false} />
      </Provider>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
