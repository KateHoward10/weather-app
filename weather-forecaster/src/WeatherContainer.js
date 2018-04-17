import { connect } from "react-redux";
import Weather from './components/Weather';
import { submit } from './data/actions';

const mapStateToProps = state => {
	return {
		location: state.location,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		submit: ( location ) => dispatch(submit(location)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Weather);