import axios from 'axios'


const axiosApi = axios.create({
    baseURL: 'http://localhost:8000/produtos'
})

const api = {
    all: () => axiosApi.get()
}

export default api

    // axios.get('http://localhost:8000/produtos').then((res) => {
    //         this.setState({
    //             produtos: res.data.data
    //         })
    //     })


