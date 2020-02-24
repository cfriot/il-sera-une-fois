import { Route, Switch } from 'react-router-dom';
import { renderRoutes } from "react-router-config";
import _ from 'lodash';

import Room from './Room';

const Rooms = (props) => {

  if (!props.state) {
    return (
      <p>loading</p>
    );
  }

  const listRooms = _.map(props.state.roomsList, room =>
    <li key={room.id}>
      <Room {...props} state={room}/>
    </li>
  );

  return (
    <div>
      <h2>Rooms available</h2>
      <ul>
        {listRooms}
      </ul>
    </div>
  )
};

export default Rooms;
