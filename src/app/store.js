import { createStore,combineReducers,applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import mathReducer from './reducers/mathReducer';
import userReducer from './reducers/userReducer';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

const logger = createLogger({

});

export default createStore(
	combineReducers({
		mathReducer: mathReducer,
		userReducer: userReducer
	}),
	{},
	applyMiddleware(logger,thunk,promise())
);//Second arg is initial argument state, first arg is we tell the store who is responsible for changing the state