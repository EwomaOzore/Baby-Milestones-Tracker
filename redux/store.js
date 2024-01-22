import { createStore, combineReducers } from 'redux';
import { milestoneReducer } from './reducers';

const rootReducer = combineReducers({
    milestones: milestoneReducer,
    // Add more reducers if needed
});

const store = createStore(rootReducer);

export default store;