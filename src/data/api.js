import axios from "../axios";
import { APPID } from "./data";
import { setInfo, setData } from "./actions";

export const getInfo = (location) => dispatch => {
	axios.get(`weather?q=${location}&APPID=${APPID}`)
  		.then(response => {
      		const info = response.data;
      		dispatch(setInfo(info));
		});
}

export const getData = (location) => dispatch => {
	axios.get(`forecast?q=${location}&APPID=${APPID}`)
  		.then(response => {
      		const data = response.data;
      		dispatch(setData(data));
		});
}