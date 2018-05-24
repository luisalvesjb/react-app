import produtos from '../api/Produtos'
import api from '../api/Produtos'


export function getAll(){
    api.all().then( (res) => {
        return getAll(res.data.data)
    })  
}

export function setProdutos(produtos){

    return {
        type: 'PRODUTOS_ALL',
        payload: produtos
        
    }

}