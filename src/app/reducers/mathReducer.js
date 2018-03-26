const mathReducer = (state = {
    result : 1,
    lastValues: []   
},action) => {
    switch(action.type) {//Type of action occured
        case "ADD" :
            state = {
                ...state,//First spread and then overwrite
                result: state.result + action.payload,
                lastValues: [...state.lastValues,action.payload]
            };//Give me all the props of the state object and add them as props in my new object
            //state.result += action.payload;
            break;
        case "SUBTRACT" :
            state = {
                ...state,//First spread and then overwrite
                result: state.result + action.payload,
                lastValues: [...state.lastValues,action.payload]
            }
            break;
    }
    return state; //Always have to return a state, this is the new state our application will be using from this point on

};

export default mathReducer;