import { SET_SESSION } from '../actions/session';

const initialState =  {
  token: '',
  handle: '',
  id: '',
  profilePicture: ''
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_SESSION:
      return action.payload;
    default:
      return state;
  }
}
