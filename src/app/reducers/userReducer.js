const userReducer = (state = {
    name: "Chiranjib",
    age: 28   
},action) => {
    switch(action.type) {//Type of action occured
        case "SET_NAME_FULFILLED" :
            state = {
                ...state,//First spread and then overwrite
                name: action.payload
            };//Give me all the props of the state object and add them as props in my new object
            //state.result += action.payload;
            break;
        case "SET_AGE" :
            state = {
                ...state,
                age:  action.payload
            };
            break;
    }
    return state; //Always have to return a state, this is the new state our application will be using from this point on

};

export default userReducer;