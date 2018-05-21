import React, { Component } from 'react'
import axios from 'axios'

class Home extends Component{


    componentDidMount(){

        const instanceAxios = axios.create({
            headers: {
                'Access-Control-Allow-Origin': '*'
              }
        })
        axios.get('http://localhost:8000/produtos').then((res) => console.log(res))
    }

    render(){
        return(
            <div className="content">
                <div className="container-fluid">



                </div> 
            </div> 
        )
    }

}

export default Home
