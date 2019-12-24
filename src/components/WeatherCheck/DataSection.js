import React from 'react';
import { Table, ListGroup, ListGroupItem } from 'reactstrap';

const DataSection = ({obj}) => {
  const newObj = JSON.parse(obj);
  return (
    <div>
      <ListGroup className="list">
        <ListGroupItem><strong>City:</strong> {newObj.location.city}&nbsp;&nbsp; <strong>Region:</strong> {newObj.location.region}&nbsp;&nbsp; <strong>Country:</strong> {newObj.location.country}</ListGroupItem>
        <ListGroupItem><strong>lat:</strong> {newObj.location.lat}&nbsp;&nbsp; <strong>long:</strong> {newObj.location.long}&nbsp;&nbsp; <strong>timezone:</strong> {newObj.location.timezone_id}</ListGroupItem>
        <ListGroupItem><strong>Humidity:</strong> {newObj.current_observation.atmosphere.humidity}&nbsp;&nbsp; <strong>Pressure:</strong> {newObj.current_observation.atmosphere.pressure}&nbsp;&nbsp; <strong>Visibility:</strong> {newObj.current_observation.atmosphere.visibility}</ListGroupItem>
        <ListGroupItem><strong>Condition:</strong> {newObj.current_observation.condition.text}&nbsp;&nbsp; <strong>Code:</strong> {newObj.current_observation.condition.code}&nbsp;&nbsp; <strong>Temperature:</strong> {newObj.current_observation.condition.temperature}</ListGroupItem>
      </ListGroup>
      <Table className="table" bordered>
       <thead>
         <tr>
           <th>day</th>
           <th>date</th>
           <th>low</th>
           <th>high</th>
           <th>text</th>
           <th>code</th>
         </tr>
       </thead>
       <tbody>
       {newObj.forecasts && newObj.forecasts.map((item, i) => 
         <tr key={i}>
           <td>{item.day}</td>
           <td>{item.date}</td>
           <td>{item.low}</td>
           <td>{item.high}</td>
           <td>{item.text}</td>
           <td>{item.code}</td>
        </tr>
       )} 
       </tbody>
    </Table>
    </div>
  );
};

export default DataSection;