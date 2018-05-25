//import produtos from '../api/Produtos'
import api from '../api/Produtos'


function isLoading(loading){
    return {
        type: 'LOADING',
        payload:{
            loading: false
        }
    }
}

function success(data){
    return {
        type: 'SUCCESS',
        payload:{
            data
        }
    }
}

function error(error){
    return {
        type: 'ERROR',
        payload:{
            error
        }
    }
}

export function thunkProdutos(){
    return (dispatch) => {

        dispatch(isLoading(true))

        api.all().then((response) => {
            if(!response){
                throw Error(response.statusText)
            }

            dispatch(isLoading(false))

            return response.data

        })
        .then((response) => response.json())
        .then((itens) => dispatch(success(itens)))
        .catch((err) => dispatch(error(err)))
    }
}




// export function getAll(){

//     return (dispatch, state) => {

//         api.all().then( (produtos) => {
            
//             dispatch({
//                 type: 'PRODUTOS_ALL',
//                 payload: {
//                     produtos: produtos.data,
//                     //isLoading: false
//                 }
//             })

//         })

//     }
// }
