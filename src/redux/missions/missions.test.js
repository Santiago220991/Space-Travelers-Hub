import MissionsReducer, { MissionsActionCreator, ToggleMissionAction } from './missions';

test('Mission reducer gets missions', () => {
  const result = MissionsReducer([], {
    type: 'GET_MISSIONS',
    payload: [
      {
        id: 'F63792', name: 'John', description: 'Lorem Ipsum', member: false,
      },
      {
        id: 'E235BA', name: 'Peter', description: 'Ipsum Lorem', member: true,
      },
    ],
  });

  expect(result).toStrictEqual([
    {
      id: 'F63792', name: 'John', description: 'Lorem Ipsum', member: false,
    },
    {
      id: 'E235BA', name: 'Peter', description: 'Ipsum Lorem', member: true,
    },
  ]);
});

test('Mission reducer toggles mission', () => {
  const result = MissionsReducer([
    {
      id: 'F63792', name: 'John', description: 'Lorem Ipsum', member: false,
    },
    {
      id: 'E235BA', name: 'Peter', description: 'Ipsum Lorem', member: true,
    },
  ], { type: 'TOGGLE_MISSION', payload: 'F63792' });

  expect(result).toStrictEqual([
    {
      id: 'F63792', name: 'John', description: 'Lorem Ipsum', member: true,
    },
    {
      id: 'E235BA', name: 'Peter', description: 'Ipsum Lorem', member: true,
    },
  ]);
});

test('Action creator for get missions', () => {
  const result = MissionsActionCreator([
    {
      id: 'F63792', name: 'John', description: 'Lorem Ipsum', member: false,
    },
    {
      id: 'E235BA', name: 'Peter', description: 'Ipsum Lorem', member: true,
    },
  ]);
  expect(result).toStrictEqual({
    type: 'GET_MISSIONS',
    payload: [
      {
        id: 'F63792', name: 'John', description: 'Lorem Ipsum', member: false,
      },
      {
        id: 'E235BA', name: 'Peter', description: 'Ipsum Lorem', member: true,
      },
    ],
  });
});

test('Action creator for toggle mission', () => {
  const result = ToggleMissionAction('FF6663');

  expect(result).toStrictEqual({ type: 'TOGGLE_MISSION', payload: 'FF6663' });
});
