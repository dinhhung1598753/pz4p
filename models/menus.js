import Axios from 'axios'
import { data } from '@/mocks/Menus.json'

export const getMenus = () => {
  Axios.get('http://localhost:5000/menus')
    .then((res) => {
      return res.data
    })
    .catch((error) => console.log('error:', error))
  return data
}

export const getMenuDetail = (id) => {
  Axios.get('http://localhost:5000/menus/' + id)
    .then((res) => {
      return res.data
    })
    .catch((error) => console.log('error:', error))
  // return data
}

// data =
// {
//   "name": "Pizza",
//   "category": "main course",
//   "price": "100$",
//   "description": "A delicious meal for family",
//   "image": "hinh anh pizza"
// }

export function insertMenu(data) {
  Axios.post('http://localhost:5000/menus/', data)
    .then((res) => {
      return res.status // 201
    })
    .catch((error) => console.log('error:', error))
  return data
}

// data =
// {
//   "name": "Pizza",
//   "category": "main course",
//   "price": "100$",
//   "description": "A delicious meal for family",
//   "image": "hinh anh pizza"
// }
export function updateMenu(data, id) {
  Axios.put('http://localhost:5000/menus/' + id, data)
    .then((res) => {
      return res.data // 200
    })
    .catch((error) => console.log('error:', error))
  return data
}
export function deleteMenu(id) {
  Axios.delete('http://localhost:5000/menus/' + id)
    .then((res) => {
      return res.data // 204
    })
    .catch((error) => console.log('error:', error))
  return data
}
