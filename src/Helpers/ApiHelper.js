import axios from 'axios';

let apiUrl = 'http://localhost:8080/api/v1';

export const getNews =  () => {
    return axios.get(`${apiUrl}/news`);
}