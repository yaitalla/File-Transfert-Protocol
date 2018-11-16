import {
  IS_PHONE
} from '../actions';

const globalReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case IS_PHONE:
      return { ...state, isPhone: payload }
  }
}

export default globalReducer;
