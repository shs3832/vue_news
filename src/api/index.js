import axios from 'axios';

// 1. request 기본설정
const config = {
    baseUrl: 'https://api.hnpwa.com/v0/'
};

// 2. api
function fetchNewsList() {
    // return axios.get(config.baseUrl + 'news/1.json');
    return axios.get(`${config.baseUrl}news/1.json`);
}

function fetchAskList() {
    return axios.get(`${config.baseUrl}ask/1.json`);
}

function fetchJobsList() {
    return axios.get(`${config.baseUrl}jobs/1.json`);
}

function fetchUserInfo(username) {
    return axios.get(`${config.baseUrl}user/${username}.json`);
}

function fetchItemInfo(item) {
    return axios.get(`${config.baseUrl}item/${item}.json`);
}

function fetchLists(item) {
    return axios.get(`${config.baseUrl}${item}/1.json`);
}

// fetchNewsList().then(data => {
//     console.log(data);
//     this.users = data.data;
// }).catch(error => {
//     console.log(error);
// })

export { fetchNewsList, fetchAskList, fetchJobsList, fetchUserInfo, fetchItemInfo, fetchLists };
