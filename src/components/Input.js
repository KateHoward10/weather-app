import React, {Component} from 'react';

class Input extends Component {
	constructor(props) {
		super(props);
		this.state = {
			search: "",
		}
		this.update = this.update.bind(this);
		this.submit = this.submit.bind(this);
	}

	update(e) {
		this.setState ({ search: e.target.value })
	}

	submit(e) {
		e.preventDefault();
		const search = this.state.search;
		this.props.submit(search);
		this.props.display(search);
		this.props.chart(search);
	}

	render() {
		return (
			<form>
			    <input type="text" onChange={this.update}/>
			    <button type="submit" onClick={this.submit}>Submit</button>
			</form>
		)
	}

};

export default Input;
