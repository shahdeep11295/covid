import { HOMEDATA, HIDELODER, SHOWLODER, STATEDATA } from '../constant';
import axios from 'axios';
//import AsyncStorage from '@react-native-community/async-storage';

export const homedata = () => async (dispatch, getState) => {
    console.log('action');
    dispatch({
        type: SHOWLODER,
    })
    try {
        const response = await axios.get("https://api.covid19india.org/data.json");
        console.log("resp", response.data);
        dispatch({
            type: HOMEDATA,
            payload: response.data
        })
        return response.data;
    }
    catch (e) {
        console.log('err', e)
        alert(e);
    }
    finally {
        dispatch({
            type: HIDELODER,
        })
    }
}

export const statedata = () => async (dispatch, getState) => {
    console.log('actionstate');
    dispatch({
        type: SHOWLODER,
    })
    try {
        const response = await axios.get("https://api.covid19india.org/state_district_wise.json");
        console.log("resp", response.data);
        dispatch({
            type: STATEDATA,
            payload: response.data
        })
        return response.data;
    }
    catch (e) {
        console.log('err', e)
        alert(e);
    }
    finally {
        dispatch({
            type: HIDELODER,
        })
    }
}