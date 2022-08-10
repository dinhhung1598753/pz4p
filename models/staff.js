import { api } from '~/api'

export const getStaffs = async () => {
  const res = await api.get('/staff').catch(() => {
    return []
  })
  return res.data
}

export const getStaffDetail = async (id) => {
  const res = await api.get('/staff/' + id).catch((error) => {
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

export const insertStaff = async (data) => {
  const res = await api
    .post('/staff', data)
    .catch((error) => console.log('error:', error))
  return res.status
}

export const updateStaff = async (data, id) => {
  const res = await api
    .put('/staff/' + id, data)
    .catch((error) => console.log('error:', error))
  return res.data
}
export const deleteStaff = async (id) => {
  const res = await api
    .delete('/staff', {
      data: [id],
    })
    .catch((error) => console.log('error:', error))
  return res.status
}
