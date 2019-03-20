import {
  CREATE_POLL,
  CREATE_POLL_PENDING, 
  CREATE_POLL_ERROR
} from '../actions/pollForm';

const initialState = {
  loading: false,
  error: null,
  question: '',
  options: [],
  option: ''
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_POLL:
      return {
        ...initialState
      };
    case CREATE_POLL_PENDING:
      return {
        ...state, loading: true
      };
    case CREATE_POLL_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
}

