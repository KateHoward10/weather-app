import axios from "axios";

export default axios.create({
	baseURL: "http://interview.toumetisanalytics.com",
	headers: {
		Accept: "application/json",
	}
});