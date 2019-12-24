import axios from 'axios';
import {URL} from '../constants';

export const fetchApiMaker = () => ({
  url,
  method = 'GET',
}) => {
  // const user = getAuthData().currentPortalUser

  return axios
    .request({
      method,
      baseURL: URL.ENDPOINT,
      url,
      // timeout: 5000,
    })
    .then(res => {
      console.log('api res', res, url);
      if (
        (res && res.status === 200) || (res.data && res.message)
      ) {
        // only here success
        return res.data;
      } else {
        // success: false; so handle in catch below
        throw res;
      }
    })
    .catch(err => {
      console.log('api err', err);
      if (err.message) {
        if (err.message) {
          throw err.message;
        } else {
          // eslint-disable-next-line no-throw-literal
          throw {
            err,
            success: false,
            error_description: 'unknown error',
            error_code: 0,
          };
        }
      } else {
        // eslint-disable-next-line no-throw-literal
        throw {
          err,
          success: false,
          error_description: 'unknown error',
          error_code: 0,
        };
      }
    });
};

export function* fetchApi({
  url,
  method = 'GET',
}) {
  console.log('url', url);
  const res = yield fetchApiMaker()({url, method});
  console.log('res', res);
  return res;
}
