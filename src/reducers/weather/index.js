const name = 'weather';

export const types = {
  GET_WEATHER_REQUEST: `${name}/GET_WEATHER_REQUEST`,
  GET_WEATHER_SUCCESS: `${name}/GET_WEATHER_SUCCESS`,
  SET_LOADING: `${name}/SET_LOADING`,
  SET_ERRMSG: `${name}/SET_ERRMSG`,
  SET_FETCH_ERROR: `${name}/SET_FETCH_ERROR`,
};

export const actions = {
  getWeatherRequest: (data) => ({
    type: types.GET_WEATHER_REQUEST,
    payload: data,
  }),
  getWeatherSuccess: response => ({
    type: types.GET_WEATHER_SUCCESS,
    payload: response,
  }),
  setErrMsg: m => ({
    type: types.SET_ERRMSG,
    payload: m,
  }),
  setLoading: bool => ({
    type: types.SET_LOADING,
    payload: {loading: bool},
  }),
  setFetchError: bool => ({
    type: types.SET_FETCH_ERROR,
    payload: {fetchErr: bool},
  }),
};

export const selectors = {
  selectWeather: state => state[name].weatherData,
  selectErrMsg: state => state[name].errMsg,
  selectLoading: state => state[name].loading,
  selectFetchErr: state => state[name].fetchErr,
};

const initialState = {
  weatherData: '',
  errMsg: null,
  loading: false,
  fetchErr: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_LOADING:
    case types.SET_FETCH_ERROR:
    case types.GET_WEATHER_REQUEST: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case types.GET_WEATHER_SUCCESS: {
      return {...state, weatherData: action.payload};
    }
    case types.SET_ERRMSG: {
      return {...state, errMsg: action.payload};
    }
    default:
      return state;
  }
};
