import axios from "../axios";
import { APPID } from "./data";
import { setInfo } from "./actions";

export const getInfo = (location) => dispatch => {
	axios.get(`weather?q=${location}&APPID=${APPID}`)
  		.then(response => {
      		const info = response.data;
      		console.log(info);
      		dispatch(setInfo(info));
		});
}