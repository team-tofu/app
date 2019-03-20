import reducer from './pollForm';
import {
  CREATE_POLL,
  CREATE_POLL_PENDING,
  CREATE_POLL_ERROR
} from '../actions/pollForm';
import { exportDefaultDeclaration } from '@babel/types';

jest.mock('../services/polls.js');

describe('pollForm reducer', () => {
  let state;
  
  beforeEach(() => {
    state = {
      loading: false,
      error: null,
      question: 'What is your favorite animal?',
      option: 'Dog',
      options: ['Dog', 'Cat', 'Snake']
    };
  });
  it('handles the CREATE_NOTE action', () => {
    const updatedState = reducer(state, {
      type: CREATE_POLL,
    });
    expect(updatedState).toEqual({
      loading: false, 
      error: null,
      question: '',
      option: '',
      options: [],
    });
  });
  it('handles the CREATE_NOTE_PENDING action', () => {
    const updatedState = reducer(state, {
      type: CREATE_POLL_PENDING
    });
    expect(updatedState).toEqual({
      ...state,
      loading: true
    });
  });
});
