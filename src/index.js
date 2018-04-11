import React from 'react';
import ReactDOM from 'react-DOM';
import SearchBar from './Component/search_bar';
import youAPISearch from 'youtube-api-search';

const ApiKey = 'AIzaSyBmanQBjPUDOS6uMPmCnuprEWBN-2N4TXE';

youAPISearch({key: ApiKey, term: 'surfboards'}, function(data){
console.log(data);
});

// create a new component. This component should produce some HTML

const App = () => {
        return ( <div>
            <SearchBar/>
            </div>);
        }
        // Take this component's generated HTML and put it on the page (in the DOM).
        ReactDOM.render( < App / > , document.querySelector('.container'));