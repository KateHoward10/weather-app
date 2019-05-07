import { connect } from "react-redux";
import Weather from './components/Weather';
import { submit } from './data/actions';
import { getInfo } from './data/api';

const mapStateToProps = state => {
	return {
		location: state.get("location"),
		weather: state.get("weather")
	};
};

const mapDispatchToProps = dispatch => {
	return {
		submit: ( search ) => dispatch(submit(search)),
		display: (location) => dispatch(getInfo(location)),
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Weather);