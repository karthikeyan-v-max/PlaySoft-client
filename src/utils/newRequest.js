import axios from "axios"


const newRequest = axios.create({
    baseURL:"https://play-soft-karthikeyan-v-maxs-projects.vercel.app/api",
    withCredentials:true,
});

export default newRequest;