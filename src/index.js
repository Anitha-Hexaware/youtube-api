import React, {Component} from 'react';
import _ from 'lodash';
import ReactDOM from 'react-DOM';
import SearchBar from './Component/search_bar';
import youAPISearch from 'youtube-api-search';
import VideoList from './Component/video-list';
import VideoDetail from './Component/video-detail';
// import VideoListItem from './Component/video-list-item';

const ApiKey = 'AIzaSyBmanQBjPUDOS6uMPmCnuprEWBN-2N4TXE';

// create a new component. This component should produce some HTML
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos : [],
            selectedVideo: null
        };
       this.videoSearch('Blockchain');
    }

    videoSearch(term) {
        youAPISearch({
            key: ApiKey,
            term: term
        }, (videos) =>  {
            this.setState({
                videos : videos,
                selectedVideo : videos[0]
            });
            // console.log(videos);

        }); 
    }

    render() {

        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300)

        return ( 
        <div>
            <SearchBar onSearchTermChange = {videoSearch} />
            <VideoDetail video ={this.state.selectedVideo} />
            <VideoList 
            onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
            videos = {this.state.videos}/>
            </div>
            );
        }
    }
    // Take this component's generated HTML and put it on the page (in the DOM).
    ReactDOM.render( <App/> , document.querySelector('.container'));