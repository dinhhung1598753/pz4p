import api from '~/api'
import { data } from '@/mocks/staffs.json'

export const getStaffs = () => {
  // api
  //   .get('http://localhost:5000/staffs')
  //   .then((res) => {
  //     return res.data
  //   })
  //   .catch((error) => console.log('error:', error))
  return data
}

export const getStaffDetail = (id) => {
  api
    .get('http://localhost:5000/staffs/' + id)
    .then((res) => {
      return res.data
    })
    .catch((error) => console.log('error:', error))
  // return data
}

// data =
// {
//   name: "Nguyễn Văn A",
//   phonenumber: "0946727052",
//   sex: "male",
//   address: "Ha Noi",
//   email: "NguyenvanA@gmail.com"
// }

export function insertStaff(data) {
  api
    .post('http://localhost:5000/staffs/', data)
    .then((res) => {
      return res.status // 201
    })
    .catch((error) => console.log('error:', error))
  return data
}

// data = {
//   name: "Nguyễn Văn A",
//   phonenumber: "0946727052",
//   sex: "male",
//   address: "Ha Noi",
//   email: "NguyenvanA@gmail.com"
// }
export function updateStaff(data, id) {
  api
    .put('http://localhost:5000/staffs/' + id, data)
    .then((res) => {
      return res.data // 200
    })
    .catch((error) => console.log('error:', error))
  return data
}
export function deleteStaff(id) {
  api
    .delete('http://localhost:5000/staffs/' + id)
    .then((res) => {
      return res.data // 204
    })
    .catch((error) => console.log('error:', error))
  return data
}
