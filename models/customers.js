import Axios from 'axios'
import { data } from '@/mocks/customers.json'

export const getCustomers = () => {
  Axios.get('http://localhost:5000/customers')
    .then((res) => {
      return res.data
    })
    .catch((error) => console.log('error:', error))
  return data
}

export const getCustomerDetail = (id) => {
  Axios.get('http://localhost:5000/customers/' + id)
    .then((res) => {
      return res.data
    })
    .catch((error) => console.log('error:', error))
  // return data
}

// data =
// {
//   "name": "Nguyễn Hữu A",
//   "phonenumber": "0946727052",
//   "sex": "male",
//   "address": "Ha Noi",
//   "email": "NguyenvanA@gmail.com"
// }

export function insertCustomer(data) {
  Axios.post('http://localhost:5000/customers/', data)
    .then((res) => {
      return res.status // 201
    })
    .catch((error) => console.log('error:', error))
  return data
}
//  data =
// {
//   "name": "Nguyễn Hữu A",
//   "phonenumber": "0946727052",
//   "sex": "male",
//   "address": "Ha Noi",
//   "email": "NguyenvanA@gmail.com"
// }

export function updateCustomer(data, id) {
  Axios.put('http://localhost:5000/customers/' + id, data)
    .then((res) => {
      return res.data // 200
    })
    .catch((error) => console.log('error:', error))
  return data
}
export function deleteCustomer(id) {
  Axios.delete('http://localhost:5000/customers/' + id)
    .then((res) => {
      return res.data // 204
    })
    .catch((error) => console.log('error:', error))
  return data
}
