import { FETCH_POSTS, FETCH_ONE_POST } from '../actions/index';
import _ from 'lodash';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_ONE_POST:
      return { ...state, [action.payload.data.id]: action.payload.data };
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}
