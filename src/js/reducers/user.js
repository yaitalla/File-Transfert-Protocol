const INITIAL_STATE = {
  users: {}
};

const setUsers = (state, action) => ({
  ...state,
  users: action.users
});

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_USER':
      return setUsers(state, action);
  }
  return state;
};

export defaut userReducer;
