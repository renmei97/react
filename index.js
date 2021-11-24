import { createStore , applyMiddleware,compose} from  'redux'
import thunk from 'redux-thunk'
import cReducer from './src/store/reducer'
const store = createStore(cReducer,compose(applyMiddleware(thunk)))
export default store