import authRequest from '@/utils/authRequest.js'

export const login = (params) => authRequest.post('/auth/login', params)
