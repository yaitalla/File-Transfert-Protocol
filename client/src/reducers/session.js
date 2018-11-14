const INITIAL_STATE = {
  authUser: null
};

const setAuthUser = (state, action) => ({
  ...state,
  authUser: action.authUser
});

const sessionReducer = (state = INITIAL_STATE, action) => {
  if (action.type === 'AUTH_USER_SET') {
    return setAuthUser(state, action);
  }
  return state;
};

export default sessionReducer;
