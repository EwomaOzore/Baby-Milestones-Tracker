export const ADD_MILESTONE = 'ADD_MILESTONE';
export const UPDATE_MILESTONE = 'UPDATE_MILESTONE';
export const DELETE_MILESTONE = 'DELETE_MILESTONE';

export const addMilestone = (milestone) => ({
    type: ADD_MILESTONE,
    payload: milestone,
});

export const updateMilestone = (milestone) => ({
    type: UPDATE_MILESTONE,
    payload: milestone,
});

export const deleteMilestone = (milestone) => ({
    type: DELETE_MILESTONE,
    payload: milestone,
});