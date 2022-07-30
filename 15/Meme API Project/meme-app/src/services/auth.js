import { api } from './api'

export const authService = {
    login(email, password) {
      return api.call().post('/member/login.php', {
        email,
        password
      })
    },
    register({
      email,
      fullname,
      password,
      repassword
    }) {
      return api.call().post('/member/register.php', {
        email,
        fullname,
        password,
        repassword
      })
    },
    fetchMe(token) {
      return api.callApiToken().post('/member/checktoken.php',{ params: { token: token } }
      )
    },
   
    
    // updateMe({
    //   nickname,
    //   description,
    //   firstName,
    //   lastName,
    //   mediaId
    // }) {
    //   const data = {
    //     nickname,
    //     description,
    //     first_name: firstName,
    //     last_name: lastName
    //   }
    //   if (mediaId) {
    //     data.simple_local_avatar = {
    //       media_id: mediaId
    //     }
    //   }
    //   return api.callWithToken().put('/wp/v2/users/me', data)
    // },
    // uploadAvatar(file) {
    //   const formData = new FormData();
    //   formData.append('file', file)
    //   return api.callWithToken().post('/wp/v2/media', formData)
    // }
  }