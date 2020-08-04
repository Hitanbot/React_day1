import React,{Component} from 'react';
import MusicItem from './MusicItem.js'

const MusicList = (props) => {

    if (props.musics){
    const musicItems = props.musics.feed.entry.map(item => {
      return (
        <MusicItem artist={item["im:artist"]["label"]}>{item["im:name"]["label"]}</MusicItem>
      );
    });

    return (
      <div className="music-list">
        {musicItems}
      </div>
    )
  }
  return null;
}
export default MusicList;
