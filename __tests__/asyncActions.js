const asyncActions = require('../src/asyncActions');
const fetchMock = require('fetch-mock');

test('fetches data from actual server', () => {
  return fetch('http://localhost:3005/comments')
    .then(response => response.json())
    .then(returnData => {
      expect(returnData).toBeDefined();
    });
});

test('fetch all comments from API', async () => {
  const result = await asyncActions.fetchData('http://localhost:3005/comments')
  expect(result).toBeDefined();
});

test('mock it', () => {
  const fakeResponse = [{
    "id": 1,
    "body": "Wow :D",
    "userId": 3
  }];
  fetchMock.get('http://localhost:3005/comments', fakeResponse);
  return fetch('http://localhost:3005/comments')
    .then(response => response.json())
    .then(returnData => {
      console.log(returnData);
    });
})

test('fetch one comment from API', () => {

});

test('fetch comment by title', () => {

});

test('fetch comments by a certain user', () => {

});

test('fetch all users', () => {

});

test('fetch one users by ID', () => {

});

test('failed to fetch comments from API', () => {

});

test('failed to fetch users from API', () => {

});

test('filter result from api', () => {
  
});

test('save data from api to localStorage', () => {
  
});

beforeEach(() => {
  fetchMock.restore();
})