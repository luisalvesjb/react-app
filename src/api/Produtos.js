import axios from 'axios'


const axiosApi = axios.create({
    baseURL: 'http://localhost:8000/produtos'
})

const api = {
    all : () => axiosApi.get(),
    find: (id) => axiosApi.get('/' + id ),
    save: (model) => axiosApi.put('',model)
}

export default api