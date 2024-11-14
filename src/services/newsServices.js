import axios from "axios";

const apiClient = axios.create({
    baseURL:"https://gnews.io/api/v4/search?q=example&max=10&apikey=cb41bbf783a98c6b8868f9fa351d5a28",
    withCredentials : false,
    headers: {
        Accept:'application/json',
        'Content-Type':'application/json'
    }
})

export default{
    getNews(){
       return apiClient.get()
    }
}