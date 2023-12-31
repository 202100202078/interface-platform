import systemrequest from '@/utils/systemRequest'

export const getApiList = () => systemrequest.get('/api/service/list')

export const addApiItem = (params) => systemrequest.post('/api/service', params)

export const removeApiItem = (ApiIds) =>
  systemrequest.delete(`/system/Api/${ApiIds}`)

export const editApiItem = (params) => systemrequest.put('/api/service', params)
