const getUser = Response =>{
    const repos = [];
    const itemLength = response.data.length;
    for(let i = 0; i<itemLength ; i++){
        const item = response.data[i]
        response.push({
            name : item.Name,
            description : item.description,
            url : item.html_url
        })
    }
    return repos;
}

const initialState = {
    user : undefined,
    repos : undefined,
    error : false
}

export default ( state = initialState, action)=>{
    switch(action.type){
        case 'START_REQUEST' :
            return{
                user : action.payload.user,
                repos : undefined, //깃허브에서 제공되는 그 레파지토리
                error : false
            }
        case 'RECEIVE_DATA':
            return action.payload.error
            ? {...state, error : true}
            : {
                ...state,
                repos : getUser(action.payload.response)
            }
        default:
            return state    
    }
}