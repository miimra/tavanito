import {
    fetchProvincesSuccess,
    fetchProvincesError,
    fetchingProvinces,
    fetchCitiesSuccess,
    fetchCitiesError,
    fetchingCities,
    fetchDistrictsSuccess,
    fetchDistrictsError,
    fetchingDistricts
} from './actions';

function fetchProvinces() {
    return dispatch => {
        dispatch(fetchingProvinces());
        fetch('https://api.tavanito.com/v1/provinces')
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    throw (res.error);
                }
                dispatch(fetchProvincesSuccess(res.data));
            })
            .catch(error => {
                dispatch(fetchProvincesError(error));
            })
    }
}

function fetchCities(id) {
    return dispatch => {
        dispatch(fetchingCities());
        fetch('https://api.tavanito.com/v1/provinces/' + id + '/cities')
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    throw (res.error);
                }
                dispatch(fetchCitiesSuccess(res.data));
            })
            .catch(error => {
                dispatch(fetchCitiesError(error));
            })
    }
}

function fetchDistricts(provinceId, id) {
    return dispatch => {
        dispatch(fetchingDistricts());
        fetch('https://api.tavanito.com/v1/provinces/' + provinceId + '/cities/' + id + '/districts')
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    throw (res.error);
                }
                dispatch(fetchDistrictsSuccess(res.data));
            })
            .catch(error => {
                dispatch(fetchDistrictsError(error));
            })
    }
}

const functions = {
    fetchProvinces,
    fetchCities,
    fetchDistricts
}

export default functions
