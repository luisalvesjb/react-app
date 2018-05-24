import produtos from '../api/Produtos'
import api from '../api/Produtos'


export function getAll(){

    let produtos = []

    api.all().then( (res) => {
        produtos = setProdutos(res.data.data)
    })
    
    return {
        type: 'PRODUTOS_ALL',
        payload: produtos
        
    }
}

function setProdutos(produtos){

    return {
        type: 'PRODUTOS_ALL',
        payload: produtos
        
    }

}