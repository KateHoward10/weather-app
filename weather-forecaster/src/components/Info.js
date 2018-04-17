import React, { Component } from 'react';

class Info extends Component {

	render() {
		const {location} = this.props;
		return (
			<div>
				<p>Current temperature in {location}</p>
			</div>
		);
	}
}

export default Info;
