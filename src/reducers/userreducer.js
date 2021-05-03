export const initalState =null

export const reducer =function(state,action){

    if(action.type=="USER"){
        return action.payload
    }
    if(action.type=="CLEAR"){
        return null;

    }
    if(action.type=="UPDATE"){
        return {
   
         ...initalState,
         followers:action.payload.followers,    
         following:action.payload.following  

        };

    }

    return state;

}