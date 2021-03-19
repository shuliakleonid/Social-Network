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
  getFollow(id = 1) {
    return instance.post(`follow/${id}`, {}).then(res => res.data)
  },
  getUnfollow(id = 1) {
    return instance.delete(`follow/${id}`).then(res => res.data)
  },
  getProfile(userId = ' 1') {
    console.warn('Obsolete method.Please use profileAPI object')
    return profileAPI.getProfile(userId)
    // return instance.get(`profile/${userId}`).then(res => res.data)
  }
}

export const authAPI = {
  me() {
    return instance.get('auth/me').then(res => res.data)
  }
}

export const profileAPI = {
  getProfile(userId = ' 1') {
    return instance.get(`profile/${userId}`).then(res => res.data)
  },
  getStatus(userId = '1') {
    return instance.get(`profile/status/${userId}`).then(res => res.data)
  },
  updateStatus(status:string){
 return instance.put(`profile/status`,{status}).then(res => res.data)
  }
}
