import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import WeatherCheckContainer from './containers/WeatherCheckContainer';
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/index.css';


ReactDOM.render(
    <Provider store={store}>
      <WeatherCheckContainer />
    </Provider>,
    document.getElementById('root')
  )
  
serviceWorker.unregister();
