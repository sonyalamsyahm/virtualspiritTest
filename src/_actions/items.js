import {
  GET_DATA,
  GET_DATA_FULLFILLED,
  GET_DATA_REJECTED,
} from '../configuration/constans';

export const fetchData = set => {
  return {
    type: GET_DATA,
    isLoading: set,
  };
};

export const fetchDataFullfilled = data => {
  return {
    type: GET_DATA_FULLFILLED,
    data: data,
    isLoading: false,
  };
};

export const fetchDataRejected = error => {
  return {
    type: GET_DATA_REJECTED,
    error: error,
    isLoading: false,
  };
};
