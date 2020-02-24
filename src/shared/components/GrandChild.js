import React, { useState, useEffect } from 'react';
// import WSClient from '../services/WSClient';
// import Audio from '../services/Audio';
import Audio from '../services/audio/';

let webSocketClient, audio;
let init = false;

const GrandChild = (props) => {
  //

  useEffect(() => {

    (async function doAsync() {

      if (init) {
        return;
      }

      init = true;
      const roomId = 0;
      audio = new Audio();
      await audio.init(roomId);

    })()

    return() => Promise.all([
      audio.stop(),
    ]).then(() => {
      init = false;
    });
  }, []);


  if (!init) {
    return (
      <p>loading</p>
    );
  }

  return (
    <div>
      <h3>Grand Childrend</h3>
      <button type="button" onClick={() => audio.startRecorder()}>Start recorder</button>
      <button type="button" onClick={() => audio.stopRecorder()}>Stop recorder</button>
      <button type="button" onClick={() => audio.startPlayer()}>Start player</button>
      <button type="button" onClick={() => audio.stopPlayer()}>Stop player</button>

    </div>
  );
};

export default GrandChild;
