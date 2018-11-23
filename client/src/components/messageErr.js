import React from 'react';
import { Icon, Button } from 'react-materialize';

const MessageErr = (props) => (
  <div className="center-align">
    <Icon className="red-text text-darken-4" large>error</Icon>
    <h4>{props.titleErr}</h4>
    <Button className="red" onClick={props.accion}>Go Back</Button>
  </div>
);

export default MessageErr;