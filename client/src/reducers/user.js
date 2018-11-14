const INITIAL_STATE = {
  users: {}
};

const setUsers = (state, action) => ({
  ...state,
  users: action.users
});

const userReducer = (state = INITIAL_STATE, action) => {
  if (action.type === 'USERS_SET') {
    return setUsers(state, action);
  }
  return state;
};

export defaut userReducer;
