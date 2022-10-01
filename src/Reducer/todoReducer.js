import { TYPE } from '../Actions/todoActions.js'

export const initialState = {
    todo: [],
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {

        case TYPE.ADD_TASK:
            return {
                ...state,
                todo: [...state.todo, action.payload]
            };

        case TYPE.REMOVE_TASK:

            return {
                ...state,
                todo: state.todo.filter(e => e.id !== action.payload)
            };

        case TYPE.CHANGE_STATUS:
            return {
                ...state,
              
            };
        case TYPE.CLEAR_ALL:
            return {
                todo: []
            };


        default:
            return state;
    };
};

export default todoReducer;