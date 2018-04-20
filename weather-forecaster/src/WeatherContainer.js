import { connect } from "react-redux";
import Weather from './components/Weather';
import { submit } from './data/actions';

const mapStateToProps = state => {
	return {
		location: state.get("location"),
	};
};

const mapDispatchToProps = dispatch => {
	return {
		submit: ( search ) => dispatch(submit(search)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Weather);