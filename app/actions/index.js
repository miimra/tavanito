/*
 * action types
 */

export const FETCH_PROVINCES = 'FETCH_PROVINCES'
export const FETCH_PROVINCES_SUCCESS = 'FETCH_PROVINCES_SUCCESS'
export const FETCH_PROVINCES_ERROR = 'FETCH_PROVINCES_ERROR'
export const FETCH_CITIES = 'FETCH_CITIES'
export const FETCH_CITIES_SUCCESS = 'FETCH_CITIES_SUCCESS'
export const FETCH_CITIES_ERROR = 'FETCH_CITIES_ERROR'
export const FETCH_DISTRICTS = 'FETCH_DISTRICTS'
export const FETCH_DISTRICTS_SUCCESS = 'FETCH_DISTRICTS_SUCCESS'
export const FETCH_DISTRICTS_ERROR = 'FETCH_DISTRICTS_ERROR'

/*
 * action creators
 */


export function fetchingProvinces() {
  return {
    type: FETCH_PROVINCES
  }
}

export function fetchProvincesSuccess(provinces) {
  return {
    type: FETCH_PROVINCES_SUCCESS,
    provinces: provinces
  }
}

export function fetchProvincesError(error) {
  return {
    type: FETCH_PROVINCES_ERROR,
    payload: error
  }
}

export function fetchingCities() {
  return {
    type: FETCH_CITIES
  }
}

export function fetchCitiesSuccess(cities) {
  return {
    type: FETCH_CITIES_SUCCESS,
    cities: cities
  }
}

export function fetchCitiesError(error) {
  return {
    type: FETCH_CITIES_ERROR,
    payload: error
  }
}

export function fetchingDistricts() {
  return {
    type: FETCH_DISTRICTS
  }
}

export function fetchDistrictsSuccess(districts) {
  return {
    type: FETCH_DISTRICTS_SUCCESS,
    districts: districts
  }
}

export function fetchDistrictsError(error) {
  return {
    type: FETCH_DISTRICTS_ERROR,
    payload: error
  }
}
