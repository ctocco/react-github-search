import axios from 'axios';

export default axios.create ({
    baseURL: 'https://api.github.com/',
    // headers: {
    //     Authorization: 'Client_ID c521f38a3fe316933134'
    // } 
})