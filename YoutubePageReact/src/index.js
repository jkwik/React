import _ from "lodash";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/search_bar";
import YTSearch from "youtube-api-search";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";

const API_KEY = "AIzaSyBfdXU3nyRn2BBMso5PHPPiWWU8-6qZj28";

// Create a new component. Component produces HTML.
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch("surfboards");
  }

  videoSearch = term => {
    YTSearch({ key: API_KEY, term: term }, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  };

  //Pass a function into a component that updates parents state.
  //Short hand syntax means onSearchTermChange is a function that takes term as a param and calls videoSearch with this param
  render() {

    //This makes it so that this method can only be called every 300ms.
    const videoSearch = _.debounce(term => {
      this.videoSearch(term);
    }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={selectedVideo =>
            this.setState({ selectedVideo: selectedVideo })
          }
        />
      </div>
    );
  }
}

// Take components HTML and put it in the DOM (page), has to be within an existing DOM element.
ReactDOM.render(<App />, document.querySelector(".container"));
