// src/services/apiService.js
import axios from 'axios';

const API_HOST = 'http://localhost:3000';

const apiService = {
  async login(dataLogin) {
    return axios.post(`${API_HOST}/login`, dataLogin)
      .then(response => response.data)
      .catch(apiService.handleError);
  },

  async signup(dataUser) {
    try {
          const response = await axios.post(`${API_HOST}/login/signup`, dataUser);
          return response.data;
      } catch (error) {
          return apiService.handleError(error);
      }
  },

  async getUsers() {
    return axios.get(`${API_HOST}/login`)
      .then(response => response.data)
      .catch(apiService.handleError);
  },

  handleError(error) {
    console.error('Erro na requisição:', error);
    throw error;
  }
};

export default apiService;
