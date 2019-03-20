import {
  createPoll,
  CREATE_POLL,
  CREATE_POLL_PENDING,
  CREATE_POLL_ERROR,
  CREATE_POLL_FULFILLED
} from './pollForm';

jest.mock('../services/polls.js', () => ({
  postPoll: () => Promise.resolve()
}));

describe('pollForm actions', () => {
  it('creates a CREATE_POLL action', () => {
    const action = createPoll({
      question: 'test',
      option: 'test', 
      options: ['test']
    });
    expect(action).toEqual({
      type: CREATE_POLL,
      pendingType: CREATE_POLL_PENDING,
      fulfilledType: CREATE_POLL_FULFILLED,
      rejectedType: CREATE_POLL_ERROR,
      payload: expect.any(Promise)
    });
  });
});
