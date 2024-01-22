import { ADD_MILESTONE } from './actions';

const initialState = {
    milestones: [],
};

export const milestoneReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MILESTONE:
            return {
                ...state,
                milestones: [...state.milestones, action.payload],
            };
        // Add more cases for other actions if needed

        default:
            return state;
    }
};