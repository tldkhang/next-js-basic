// src/lib/axios.ts
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, // Use environment variables for flexibility
  timeout: 10000, // Request timeout
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor to add auth tokens if needed
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // Replace with your auth logic
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: unknown) => Promise.reject(error)
);

// Response interceptor for error handling
axiosInstance.interceptors.response.use(
  (response) => response,
  (error: { response: { status: number } }) => {
    // Handle specific status codes or errors
    if (error.response?.status === 401) {
      // Handle unauthorized access, like redirecting to login
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
