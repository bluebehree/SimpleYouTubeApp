// Must import React in any file that has JSX
import React, { Component } from 'react';

class SearchBar extends Component
{
    constructor(props)
    {
        super(props);
        
        // Only in constructor do you change the state like this
        // You use this.setState({object: ...}) in your functions
        // You can use this.state.term to access the value, but do not use that to set the value of state
        this.state = { term: '' };
    }
    onInputChange(term)
    {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
    // Controlled component has its value set by states
    // Value only changes when the state changes
    // Whenever setState is called, render() is called again
    render() 
    {
        return (
            <div className="search-bar">
                <input
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }
}

// Any file that imports search_bar will get this SearchBar component
export default SearchBar;