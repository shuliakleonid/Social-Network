import axios from 'axios';
import {ProfileAPIType} from '../types/entities';

type ResponseType<T> = {
  resultCode: number
  messages: Array<string>
  data: T
}
type LoginType = {
  id: number
  email: string
  login: string
}
export type UserDataType = {
  name: string
  id: number
  photos: {
    small: null | string
    large: null |string
  },
  status: null |string
  followed: boolean
}

type UsersRequestType = {
  items:Array<UserDataType>
  totalCount:number
  error:string
}

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {'API-KEY': '69c9d2d3-e5a4-4bb9-9356-a9517225e2b4'}
})

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get<UsersRequestType>(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data)
  },
  getFollow(id = 1) {
    return instance.post<ResponseType<{}>>(`follow/${id}`, {})
        .then(res => res.data)
  },
  getUnfollow(id = 1) {
    return instance.delete<ResponseType<{}>>(`follow/${id}`)
        .then(res => res.data)
  },
  getProfile(userId = ' 1') {
    return profileAPI.getProfile(userId)
  }
}

export const authAPI = {
  me() {
    return instance.get<ResponseType<LoginType>>('auth/me')
        .then(res => res.data)
  },
  login(email: string, password: string, rememberMe = false) {
    return instance.post<ResponseType<{ userId: number }>>(`auth/login`, {email, password, rememberMe})
        .then(res => res.data)
  },
  logOut() {
    return instance.delete<ResponseType<{}>>(`auth/login`)
        .then(res => res.data)
  }
}

export const profileAPI = {
  getProfile(userId = ' 1') {
    return instance.get<ProfileAPIType>(`profile/${userId}`).then(res => res.data)
  },
  getStatus(userId = '1') {
    return instance.get(`profile/status/${userId}`).then(res => res.data)
  },
  updateStatus(status: string) {
    return instance.put(`profile/status`, {status}).then(res => res.data)
  },
  savePhoto(photoFile:any){
    const formData = new FormData();
    formData.append('image',photoFile)
    return instance.put(`profile/photo`,formData,{
      headers: { "Content-Type": "multipart/form-data" }
    }).then(res => res.data)
  }
}
