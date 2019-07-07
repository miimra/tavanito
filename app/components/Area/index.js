import React, { Component } from 'react';
import axios from 'axios';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import fetchAction from '../../fetchAreas';
import { getProvincesError, getProvinces, getProvincesPending , 
  getCitiesError, getCities, getCitiesPending ,
  getDistrictsError, getDistricts, getDistrictsPending  } from '../../reducers';
import { fetchProvinces, fetchCities } from '../../actions';
import { Select, Row, Col } from 'antd';

import 'antd/dist/antd.css';
import style from './index.css';

const { Option, OptGroup } = Select;


class Area extends Component {
  constructor(props) {
    super(props);
    this.state = {
      provinces: [],
      cities: [],
      districts: [],
      selectedProvince: { id: 0, title: 'لیست استانها' },
      selectedCity: { id: 0, title: 'لیست شهرها' },
      selectedDistrict: { id: 0, title: 'لیست مناطق' },
      isCityDisabled: true,
      isDistrictDisabled: true
    }
  }

  componentWillMount() {
    const { fetchProvinces } = this.props;
    fetchProvinces();
  }


  renderProvinces() {
    const { provinces } = this.props;
    return (
      provinces.map((province) => {
        return (
          <Option key={province.id} onClick={() => this.loadCities(province.id, province.title)}>
            {province.title}
          </Option>
        )
      })
    )
  }

  loadCities(id, title) {
    this.setState({
      selectedProvince: { id, title },
      selectedCity: { id: '0', title: 'لیست شهرها' },
      selectedDistrict: { id: '0', title: 'لیست مناطق' },
      isCityDisabled: false,
      isDistrictDisabled: true
    });

    const { fetchCities } = this.props;
    fetchCities(id);
  }

  renderCities() {
    const { cities } = this.props;

    return (
      cities.map((city) => {
        return (
          <Option key={city.id} onClick={() => this.loadDistricts(city.id, city.title)}>
            {city.title}
          </Option>
        )
      })
    )
  }

  loadDistricts(id, title) {
    this.setState({
      selectedCity: { id, title },
      selectedDistrict: { id: '0', title: 'لیست مناطق' },
      isDistrictDisabled: false
    });

    const { fetchDistricts } = this.props;
    fetchDistricts(this.state.selectedProvince.id, id);

  }

  selectDistrict(id, title) {
    this.setState({ selectedDistrict: { id, title } });
  }

  renderDistricts() {
    const { districts } = this.props;

    return (
      districts.map((district) => {
        return (
          <Option key={district.id} onClick={() => this.selectDistrict(district.id, district.title)}>
            {district.title}
          </Option>
        )
      })
    )
  }


  render() {
    return (
      <div className="container">
        <Row gutter={16}>
          <Col className="gutter-row" xs={24} sm={8}>
            <Select className="box"
              value={this.state.selectedProvince.title}>
              {this.props.provinces ? this.renderProvinces() : null}
            </Select>
          </Col>
          <Col className="gutter-row" xs={24} sm={8}>
            <Select className="box" disabled={this.state.isCityDisabled}
              value={this.state.selectedCity.title}>
              {this.props.cities ? this.renderCities() : null}
            </Select>
          </Col>
          <Col className="gutter-row" xs={24} sm={8}>
            <Select className="box" value={this.state.selectedDistrict.title}
              disabled={this.state.isDistrictDisabled}>
              {this.props.districts ?this.renderDistricts() : null}
            </Select>
          </Col>
        </Row>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  error: getProvincesError(state.provincesReducer),
  provinces: getProvinces(state.provincesReducer),
  pending: getProvincesPending(state.provincesReducer),
  error: getCitiesError(state.citiesReducer),
  cities: getCities(state.citiesReducer),
  pending: getCitiesPending(state.citiesReducer),
  error: getDistrictsError(state.districtsReducer),
  districts: getDistricts(state.districtsReducer),
  pending: getDistrictsPending(state.districtsReducer)
})


const mapDispatchToProps = dispatch => bindActionCreators({
  fetchProvinces: fetchAction.fetchProvinces,
  fetchCities: fetchAction.fetchCities,
  fetchDistricts: fetchAction.fetchDistricts
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Area);

