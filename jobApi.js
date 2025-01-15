import axios from 'axios';

// Base API URL (uses environment variable or default localhost)
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api/jobs';

// Create an Axios instance
const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Handle API Errors
const handleApiError = (error) => {
    if (error.response) {
        console.error('API Error:', error.response.data.message || error.response.data);
    } else {
        console.error('API Error:', error.message);
    }
    throw error;
};

// Fetch all jobs
export const fetchJobs = async () => {
    try {
        const response = await apiClient.get('/');
        return response.data;
    } catch (error) {
        handleApiError(error);
    }
};

// Fetch a specific job by ID
export const fetchJobById = async (id) => {
    try {
        const response = await apiClient.get(`/${id}`);
        return response.data;
    } catch (error) {
        handleApiError(error);
    }
};

// Add a new job
export const addJob = async (jobData) => {
    try {
        const response = await apiClient.post('/', jobData);
        return response.data;
    } catch (error) {
        handleApiError(error);
    }
};

// Update a job
export const updateJob = async (id, jobData) => {
    try {
        const response = await apiClient.put(`/${id}`, jobData);
        return response.data;
    } catch (error) {
        handleApiError(error);
    }
};

// Delete a job
export const deleteJob = async (id) => {
    try {
        await apiClient.delete(`/${id}`);
    } catch (error) {
        handleApiError(error);
    }
};
