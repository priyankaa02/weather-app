import {
    takeLatest,
    call,
    put,
    delay,
    race,
  } from 'redux-saga/effects';
  import {types as weatherTypes, actions as weatherActions} from './index';
  import {fetchApi} from '../../api';
  import {URL} from '../../constants';
  
  function* getWeather(actionObj) {
    console.log('actionObj', actionObj.payload)
    try {
      const {responseJson, timeout} = yield race({
        responseJson: call(fetchApi, {
          url: URL.GET_WEATHER + actionObj.payload,
        }),
        timeout: delay(10000),
      });
      if (timeout) {
        yield put(weatherActions.setFetchError(true));
        yield weatherActions.setErrMsg('timeout');
        console.log('timeout');
      } else {
        console.log('responseJson', responseJson);
        const {data} = responseJson;
        yield put(weatherActions.getWeatherSuccess(data));
      }
      yield put(weatherActions.setLoading(false));
    } catch (e) {
      const errMsg =
        e && e.error_description ? e.error_description : 'unknown error';
      yield put(weatherActions.setErrMsg(errMsg));
      yield put(weatherActions.setFetchError(true));
      yield put(weatherActions.setLoading(false));
    }
  }

  export default [
    takeLatest(weatherTypes.GET_WEATHER_REQUEST, getWeather),
  ];
  