import React, { Component } from 'react';

class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = {term: ''};
    }

    //Whenever the state is changed, component re-renders
    //Controlled component is one where the value is set to a state prop.
    render() {
        return (
            <div className="search-bar">
                <input 
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)}
                />
            </div>
        );
    }

    onInputChange(term) {
        this.setState({ term: term });
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;