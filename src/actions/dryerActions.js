import {ADD_TODO} from '../constants/dryerConstants';

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};

export const addToDo = (addTodo) => ({type: ADD_TODO, todo: addTodo});
