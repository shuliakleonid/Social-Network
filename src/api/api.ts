import axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {'API-KEY': '69c9d2d3-e5a4-4bb9-9356-a9517225e2b4'}
})

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`, {withCredentials: true})
        .then(response => response.data)
  },
  //делаем на сервер запрос о данных
  getUsers2  (currentPage = 1, pageSize = 10)  {
    return instance.get(`follow?page=${currentPage}&count=${pageSize}`, {withCredentials: true})
        .then(response => response.data)
  }//делаем на сервер запрос о данных



}



