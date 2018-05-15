export default function hello(state = [], action) {

    switch(action.type){
        case 'CLICK_HELLO':
            return [...state, {id: Math.random(),msg: action.msg}]
        default:
        return state;
    }

}