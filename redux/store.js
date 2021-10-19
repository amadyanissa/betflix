import { createStore } from 'redux';

// Reducers
import rootReducers from './reducers';

// export default function configureStore(initialState) {
//   const store = createStore(rootReducers)

//   return store;
// }
const store = createStore(rootReducers)
export default store;