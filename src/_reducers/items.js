import {
  GET_DATA,
  GET_DATA_FULLFILLED,
  GET_DATA_REJECTED,
} from '../configuration/constans';

const initialState = {
  data: [],
  isLoading: true,
  error: null,
};

const itemsGetData = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        isLoading: action.isLoading,
        error: null,
      };
    case GET_DATA_FULLFILLED:
      return {
        ...state,
        data: action.data,
        isLoading: action.isLoading,
      };
    case GET_DATA_REJECTED:
      return {
        ...state,
        error: action.error,
        isLoading: action.isLoading,
      };
    default:
      return state;
  }
};

export default itemsGetData;
