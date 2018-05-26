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