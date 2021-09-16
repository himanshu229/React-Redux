import  { combineReducers } from 'redux'
import { productsReducer,selectedProductsReducer} from "./Reducer";
const reducers = combineReducers({
    allProducts: productsReducer,
    product: selectedProductsReducer,
});

export default reducers;