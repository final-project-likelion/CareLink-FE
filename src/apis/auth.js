import api from './axios'

export const login = (payload) => api.post('/api/login', payload)
export const signup = (payload) => api.post('/api/signup', payload)
