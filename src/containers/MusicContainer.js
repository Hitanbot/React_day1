import React,{Component} from 'react';
import MusicList from '../components/MusicList';


class MusicContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      musics: null

    };

  }

  componentDidMount() {
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';

    fetch(url)
      .then(res => res.json())
      .then(musics => this.setState({ musics: musics }))
      .catch(err => console.error);
  }


  render() {


    return (
      <div>
        <h2>Music Container</h2>
        <MusicList musics={this.state.musics}/>

      </div>
    );
  }
}

export default MusicContainer;
