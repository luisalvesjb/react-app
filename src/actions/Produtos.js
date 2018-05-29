import api from '../api/Produtos'

export function thunkProdutos(){
    return (dispatch) => {

        api.all().then((response) => {

            dispatch({
                type: 'SUCCESS',
                payload:{
                    produtos: response.data.data
                }
            })

        })
    }
}

export function findProduto(id){
    return (dispatch) => {

        api.find(id).then((response) => {

            dispatch({
                type: 'FIND',
                payload:{
                    produto: response.data.data
                }
            })

        })
    }
}

