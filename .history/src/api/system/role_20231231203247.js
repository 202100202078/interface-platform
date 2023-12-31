import systemrequest from '@/utils/systemRequest'

export const addRoleItem = (params) =>
  systemrequest.post('/system/role', params)

export const editRoleItem = (params) =>
  systemrequest.put('/system/role', params)

export const getRoleList = (params) => systemrequest.get()