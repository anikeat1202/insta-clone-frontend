export const initalState =null

export const reducer =function(state,action){

    if(action.type=="USER"){
        return action.payload
    }

    return state;

}