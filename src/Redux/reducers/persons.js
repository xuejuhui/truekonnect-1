const INITIAL_STATE = {
  uid:null,
  token: null,
  firstName: null,
  lastName: null,
  email: null,
  userPhone: null,
  profilePic: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_USER_PROFILE':
            return {
                ...state,
                allPersons: action.payload.data
            };
        case "GET_ALL_USERS_PENDING":
            return {...state};
        case "GET_ALL_USERS_REJECTED":
            return {...state};
        case 'ADD_PERSON':
            return {
                ...state,
                persons: state.persons.concat('billy')
            };
        case 'REMOVE_PERSON':
            return {
                ...state,
                persons: state.persons
            };
        default:
            return state
    }
}
