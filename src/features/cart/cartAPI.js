import axios from "axios";

export function fetchItems() {
  return axios.get('http://localhost:8080/cart')
}

export function addItems(item) {
  return axios.post('http://localhost:8080/cart', item)
}

export function updateItems(id, item) {
  return axios.patch(`http://localhost:8080/cart/${id}`, item)
}

export function deleteItems(id) {
  return axios.delete(`http://localhost:8080/cart/${id}`)
}
