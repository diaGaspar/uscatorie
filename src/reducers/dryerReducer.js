import {ADD_TODO} from '../constants/dryerConstants';

const initialState = {
    todos: {}
};

const dryer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return Object.assign({}, state, {
                todos: [
                    ...state.todos,
                    {
                        todo: action.todo,
                        completed: false
                    }
                ]
            });
        default:
            return state;
    }
}

export default dryer;
