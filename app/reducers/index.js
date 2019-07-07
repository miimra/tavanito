import { combineReducers } from 'redux';

import {
    FETCH_PROVINCES,
    FETCH_PROVINCES_SUCCESS,
    FETCH_PROVINCES_ERROR,
    FETCH_CITIES,
    FETCH_CITIES_SUCCESS,
    FETCH_CITIES_ERROR,
    FETCH_DISTRICTS,
    FETCH_DISTRICTS_SUCCESS,
    FETCH_DISTRICTS_ERROR
} from '../actions'
import { STATUS_CODES } from 'http';

const initialState = {
    pending: false,
    provinces: [],
    error: null
}

export function provincesReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_PROVINCES: 
            return {
                ...state,
                pending: true
            }
        case FETCH_PROVINCES_SUCCESS:
            return {
                ...state,
                pending: false,
                provinces: action.provinces
            }
        case FETCH_PROVINCES_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default: 
            return state;
    }
}

export function citiesReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_CITIES: 
            return {
                ...state,
                pending: true
            }
        case FETCH_CITIES_SUCCESS:
            return {
                ...state,
                pending: false,
                cities: action.cities
            }
        case FETCH_CITIES_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default: 
            return state;
    }
}

export function districtsReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_DISTRICTS: 
            return {
                ...state,
                pending: true
            }
        case FETCH_DISTRICTS_SUCCESS:
            return {
                ...state,
                pending: false,
                districts: action.districts
            }
        case FETCH_DISTRICTS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default: 
            return state;
    }
}

export const getProvinces = state => state.provinces;
export const getProvincesPending = state => state.pending;
export const getProvincesError = state => state.error;

export const getCities = state => state.cities;
export const getCitiesPending = state => state.pending;
export const getCitiesError = state => state.error;

export const getDistricts = state => state.districts;
export const getDistrictsPending = state => state.pending;
export const getDistrictsError = state => state.error;

const rootReducer = combineReducers({
    provincesReducer,
    citiesReducer,
    districtsReducer
});

export default rootReducer
