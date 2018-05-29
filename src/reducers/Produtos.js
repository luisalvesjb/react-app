export function produtos(state = [], action) {

    switch(action.type){

        case 'SUCCESS':
            return action.payload.produtos

        default:
            return state;
    }

}

export function produtoEmAlteracao(state = [], action) {

    switch(action.type){

        case 'FIND':
            return action.payload.produto

        default:
            return state;
    }

}