 import { createStore, applyMiddleware } from 'redux';
 import thunk from 'redux-thunk';
 import rootReducer from './redux/reducers'
 import { composeWithDevTools } from 'redux-devtools-extension';

 const initialState = {};

 const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    // applyMiddelware(...middelware) //es esta para que no se vea el icono verde en browser
    composeWithDevTools(applyMiddleware(...middleware)) //modo desarrollo para ver icono verde en browser
);

export default store;