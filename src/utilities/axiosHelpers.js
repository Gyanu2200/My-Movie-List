import axios from 'axios'


export const fetchData = (str) => {
    const apiEndPoint = `https://www.omdbapi.com/?apikey=d05d7c70&t=${str}`;
    console.log(str);
    const response = axios(apiEndPoint);
    return response;
    
}
