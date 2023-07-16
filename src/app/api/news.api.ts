import axios from "axios";

const url = "https://www3.nhk.or.jp"


export const getNews = (path: string = '/news') => {
    return axios.get(`${url}${path}`)
};
