import axios from 'axios';

const instance = axios.create({
  // https://backend-mainyuu-dev.herokuapp.com/
  baseURL: 'https://www.omdbapi.com/?apikey=fee5f3bd',
  timeout: 100000,
  headers: {
    // 'X-Custom-Header': 'foobar'
    // 'Access-Control-Allow-Origin': '*'
  }
});

export default instance;
