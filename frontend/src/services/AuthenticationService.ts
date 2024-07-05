import Api from './Api'

interface Credentials {
  email: string
  password: string
}

const AuthService = {
  register: (credentials: Credentials) => {
    return Api().post('register', credentials)
  }
}

export default AuthService
