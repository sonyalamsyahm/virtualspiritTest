import {
  fetchData,
  fetchDataFullfilled,
  fetchDataRejected,
} from '../_actions/items';
import {URL} from '../configuration/api';
import {GET_ALL, ACTION, ACTION_ALL} from '../configuration/constans';

const fetchingData = (METHOD, item) => {
  return dispatch => {
    switch (METHOD) {
      case GET_ALL:
        dispatch(fetchData(true));

        URL.get(`data`)
          .then(res => {
            dispatch(fetchDataFullfilled(res.data));
          })
          .catch(error => {
            dispatch(fetchDataRejected(error));
          });
        break;

      case ACTION:
        dispatch(fetchData(false));
        break;

      case ACTION_ALL:
        dispatch(fetchData(false));
        dispatch(fetchDataFullfilled(item));
    }
  };
};

export default fetchingData;
