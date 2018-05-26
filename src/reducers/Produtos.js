export default function produtos(state = [], action) {

    switch(action.type){
        case 'SUCCESS':
            //console.log([...state, action.payload.produtos.data])
            return action.payload.produtos
        default:
        return state;
    }

}