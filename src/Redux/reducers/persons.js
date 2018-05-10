let initialState = {
    persons: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ALL_PERSONS_FULFILLED':
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
