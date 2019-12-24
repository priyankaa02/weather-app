import React, {useState, useCallback} from 'react';
import Loading from '../Loading';
import {Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import {useDispatch, useSelector} from 'react-redux';
import {
  actions as weatherActions,
  selectors as weatherSelectors,
} from '../../reducers/weather';
import DataSection from './DataSection'

const WeatherCheck = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownValue, setDropdownValue] = useState('Select City');
  const toggle = () => setDropdownOpen(prevState => !prevState);
  const onClickSelect = (val) => {
      setDropdownValue(val);
  }
  const loading = useSelector(weatherSelectors.selectLoading);
  const fetchErr = useSelector(weatherSelectors.selectFetchErr);
  const errMsg = useSelector(weatherSelectors.selectErrMsg);
  const weatherData = useSelector(weatherSelectors.selectWeather);
  console.log('***weatherData', weatherData);
  const dispatch = useDispatch();
  const onSubmit = useCallback(() => {
    dispatch(weatherActions.setLoading(true));
    dispatch(weatherActions.getWeatherRequest(dropdownValue));
  }, [dispatch, dropdownValue]);
  return (
    <div className="container">
      <Dropdown isOpen={dropdownOpen} size="lg" toggle={toggle} className="dropdown">
        <DropdownToggle caret>
          {dropdownValue}
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={() => onClickSelect("New York")}>New York</DropdownItem>
          <DropdownItem onClick={() => onClickSelect("Chicago")}>Chicago</DropdownItem>
          <DropdownItem onClick={() => onClickSelect("Washington")}>Washington</DropdownItem>
          <DropdownItem onClick={() => onClickSelect("San Francisco")}>San Francisco</DropdownItem>
          <DropdownItem onClick={() => onClickSelect("Boston")}>Boston</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <Button outline color="primary" className="button" size="lg" onClick={onSubmit}>Submit</Button>
      {fetchErr && (
        <p className="error">{errMsg}</p>
      )}
      {loading && <Loading/>}
      {weatherData !== '' && <DataSection obj={weatherData}/>}
    </div>
  );
};

export default WeatherCheck;
