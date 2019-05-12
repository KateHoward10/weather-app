import { connect } from "react-redux";
import Weather from './components/Weather';
import { submit } from './data/actions';
import { getInfo, getData } from './data/api';

const mapStateToProps = state => {
	return {
		location: state.get("location"),
		weather: state.get("weather"),
		forecast: state.get("forecast")
	};
};

const mapDispatchToProps = dispatch => {
	return {
		submit: (search) => dispatch(submit(search)),
		display: (location) => dispatch(getInfo(location)),
		chart: (location) => dispatch(getData(location)),
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Weather);