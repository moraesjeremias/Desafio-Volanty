import axios from 'axios';

const api = axios.create({ baseURL: 'https://cors-anywhere.herokuapp.com/https://leonardodavila-price-api.glitch.me/'});

const getMakes = async () => {
    const response = await api.get(`/brands`)
    return response};

const getModels = async (make) => {
    const response = await api.get(`/brands/${make}/models`);
    return response};

const getYear = async (make, model) => {
    const response = await api.get(`/brands/${make}/models/${model}/years`);
    return response};

const getVersions = async (make, model, year) => {
    const response = await api.get(`/brands/${make}/models/${model}/years/${year}/versions`);
    return response};

const getCar = async (make, model, year, versionID) => {
        const response = await api.get(`/brands/${make}/models/${model}/years/${year}/versions/${versionID}`);
        return response};

const API = {
    getMakes,
    getModels,
    getYear,
    getVersions,
    getCar
}

export default API;