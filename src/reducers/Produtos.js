export default function produtos(state = {}, action) {

    switch(action.type){
        case 'SUCCESS':
            return {produtos:action.payload.produtos}
        default:
        return state;
    }

}