import React from 'react';
import { Icon, Button } from 'react-materialize';

const MessageErr = (props) => (
  <div className="center-align">
    <Icon className="red-text text-darken-4" large>Fail</Icon>
    <h4>{props.titleErr}</h4>
    <p><b>Message:</b> {props.titleErr}</p>
    <Button className="red" onClick={props.accion}>Go Back</Button>
  </div>
);

export default MessageErr;