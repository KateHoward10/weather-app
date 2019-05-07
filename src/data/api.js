import axios from "../axios";
import { setInfo } from "./actions";

export const getInfo = (location) => dispatch => {
	axios.get(`/location/${location}`)
  		.then(response => {
      		const id = response.data[0].woeid;
        	axios.get(`/weather/${id}`)
	      		.then(response => {
		      		const info = response.data;
		      		dispatch(setInfo(info));
		      	})
		});
}