import React, { Component } from 'react';


class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: ''};
	} 

	render() {
		return (
			<div className="search-bar">
				<h1>surf the tube</h1>
				<input 
					placeholder="I'm looking for..."
					value={this.state.term}
					onChange={event => this.onInputChange(event.target.value)} />
			</div>
		);
	}

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
}

export default SearchBar;