import axios from 'axios';

export const getAllPersons = () => {
    // console.log("Getting company", company_id);
    return {
        type: "GET_ALL_PERSONS",
        payload: axios.get(`http://localhost:8080/users`)
    }
};