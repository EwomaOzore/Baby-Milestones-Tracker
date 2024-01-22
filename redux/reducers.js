import { ADD_MILESTONE, UPDATE_MILESTONE, DELETE_MILESTONE } from './actions';

const initialState = {
    milestones: [],
};

const milestoneReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MILESTONE:
            return {
                ...state,
                milestones: [...state.milestones, action.payload],
            };
        case UPDATE_MILESTONE:
            return {
                ...state,
                milestones: state.milestones.map((milestone) =>
                    milestone.date === action.payload.date ? action.payload : milestone
                ),
            };
        case DELETE_MILESTONE:
            return {
                ...state,
                milestones: state.milestones.filter((milestone) => milestone.date !== action.payload.date),
            };
        default:
            return state;
    }
};

export default milestoneReducer;