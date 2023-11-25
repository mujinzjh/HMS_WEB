interface urlInterface {
  [index: string]: any | undefined
}
const loginApi:urlInterface = {
  method: 'post',
  url: '/hms/login'
}

const logoutApi:urlInterface = {
  method: 'post',
  url: '/hms/logOut'
}

const loginOutApi:urlInterface = {
  method: 'get',
  url: '/hms/log/sysLog'
}


export default {
  loginApi,
  logoutApi,
  loginOutApi
}