import { api } from './api'

export const authService = {
  login(username, password) {
    return api.call().post('/jwt-auth/v1/token', {
      username,
      password
    })
  },
  register({
    email,
    username,
    password,
    nickname
  }) {
    return api.call().post('/wp/v2/users/register', {
      email,
      username,
      password,
      nickname
    })
  },
  fetchMe() {
    return api.callWithToken().get('/wp/v2/users/me')
  },
  updateMe({
    nickname,
    description,
    firstName,
    lastName,
    mediaId
  }) {
    const data = {
      nickname,
      description,
      first_name: firstName,
      last_name: lastName
    }
    if (mediaId) {
      data.simple_local_avatar = {
        media_id: mediaId
      }
    }
    return api.callWithToken().put('/wp/v2/users/me', data)
  },
  uploadAvatar(file) {
    const formData = new FormData();
    formData.append('file', file)
    return api.callWithToken().post('/wp/v2/media', formData)
  }
}