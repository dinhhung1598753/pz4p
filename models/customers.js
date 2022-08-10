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

<<<<<<< HEAD
export function updateStaff(data, id) {
  api
    .put('http://localhost:5000/customers/' + id, data)
    .then((res) => {
      return res.data // 200
    })
    .catch((error) => console.log('error:', error))
  return data
}
export const deleteCustomer = async (id) => {
  const res = await api
    .delete('/customer', {})

    .catch((error) => console.log('error:', error))
=======
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
>>>>>>> a0722d20a30406fe84af865a11604350e35beb3f
  return res.status
}
