import profileReducer, { addPostActionCreator, deletePost } from './profileReducer'

let state = {
  posts: [
    { id: 1, message: "Hi, how are you", likesCount: 0 },
    { id: 2, message: "It's my first post", likesCount: 0 },
  ],
};

test('length of posts should be inctememted', () => {
  //1. test data
  let action = addPostActionCreator('some new post')

  //2. action
  let newState = profileReducer(state, action);

  //3.expectation
  expect(newState.posts.length).toBe(3);
});

test('message should be correct', () => {
  //1. test data
  let action = addPostActionCreator('some new post')

  //2. action
  let newState = profileReducer(state, action);

  //3.expectation
  expect(newState.posts[2].message).toBe('some new post');
});

test('after deleting length of messages should be decremented', () => {
  let action = deletePost(1)
  let newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(1);
});