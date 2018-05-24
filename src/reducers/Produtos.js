export default function produtos(state = [], action) {

    switch(action.type){
        case 'PRODUTOS_ALL':
            return [...state, action.payload]
        default:
        return state;
    }

}