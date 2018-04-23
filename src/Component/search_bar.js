import React, {Component} from 'react';

// const SearchBar = () => {
//     return <div className=".container"> <input/> </div>;
// };

//  in es6 version 
class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        };
    }

    render() {
        // this.state.term = event_obj.target.value     bad !!!!
        // return <input onChange={this.onInputChange}/>;
        // how can change this
        // return <input onChange={event_obj =>console.log(event_obj.target.value)}/>;
        return ( <div className = "search-bar">
            <input value = {
                this.state.term
            }
            onChange = {
                event_obj => this.onInputChange(event_obj.target.value)}/> 
                { /* value of the input is: {this.state.term} */ } 
            </div>
        );


    }
    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

    // onInputChange(event_obj){
    // console.log(event_obj);
    // // console.log(event_obj.target.value);
    // }
}

export default SearchBar;