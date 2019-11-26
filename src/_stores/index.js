import thunk from 'redux-thunk';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import items from '../_reducers/items';

const rootReduces = combineReducers({
  items,
});

const store = createStore(rootReduces, applyMiddleware(thunk));

export default store;
