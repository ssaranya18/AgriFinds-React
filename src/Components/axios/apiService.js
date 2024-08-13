
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/experts';

export const getExperts = () => axios.get(API_BASE_URL);

export const getExpertById = (id) => axios.get(`${API_BASE_URL}/${id}`);

export const addExpert = (expert) => axios.post(API_BASE_URL, expert);

export const updateExpert = (id, expert) => axios.put(`${API_BASE_URL}/${id}`, expert);

export const deleteExpert = (id) => axios.delete(`${API_BASE_URL}/${id}`);
