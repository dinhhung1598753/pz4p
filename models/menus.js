import { api } from '~/api'

export const getMenus = async () => {
  const res = await api.get('/dish').catch(() => {
    return []
  })
  console.log(res)
  return res.data
}

export const getMenuDetail = async (id) => {
  const res = await api.get('/dish/' + id).catch((error) => {
    console.log('error:', error)
    return null
  })
  return res.data
}

// data =
// {
//   "name": "Pizza",
//   "category": "main course",
//   "price": "100$",
//   "description": "A delicious meal for family",
//   "image": "hinh anh pizza"
// }

export const insertMenu = async (data) => {
  const res = await api
    .post('/dish', data)
    .catch((error) => console.log('error:', error))
  return res.status
}

export const updateMenu = async (data, id) => {
  const res = await api
    .put('/dish/' + id, data)
    .catch((error) => console.log('error:', error))
  return res.data
}
export const deleteMenu = async (id) => {
  const res = await api
    .delete('/dish', {
      data: [id],
    })
    .catch((error) => console.log('error:', error))
  return res.status
}
