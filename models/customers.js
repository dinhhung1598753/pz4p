import { api } from '~/api'

export const getCustomers = async () => {
  const res = await api.get('/customer').catch(() => {
    return []
  })
  return res.data
}

export const getCustomerDetail = async (id) => {
  const res = await api.get('/customer/' + id).catch((error) => {
    console.log('error:', error)
    return null
  })
  return res.data
}

// data =
// {
//   name: "Nguyễn Văn A",
//   phonenumber: "0946727052",
//   sex: "male",
//   address: "Ha Noi",
//   email: "NguyenvanA@gmail.com"
// }

export const insertCustomer = async (data) => {
  const res = await api
    .post('/customer', data)
    .catch((error) => console.log('error:', error))
  return res.status
}

export const updateCustomer = async (data, id) => {
  const res = await api
    .put('/customer/' + id, data)
    .catch((error) => console.log('error:', error))
  return res.data
}
export const deleteCustomer = async (id) => {
  const res = await api
    .delete('/customer', {
      data: [id],
    })
    .catch((error) => console.log('error:', error))
  return res.status
}
