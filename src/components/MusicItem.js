import React, { Component } from "react";

const MusicItem = (props) => {

    return (
      <div>
        <h4>{props.children}</h4>
        <p>{props.artist}</p>
      </div>
    );

}

export default MusicItem;
