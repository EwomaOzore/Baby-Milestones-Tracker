import { createStore } from 'redux';
import milestoneReducer from './reducers';

const store = createStore(milestoneReducer);

export default store;