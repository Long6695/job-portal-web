import {ILoginData} from '../constants/credentials'
import {ENDPOINTS} from '../endpoints'
import {http} from '../utils/http'

export const login = async (data: ILoginData) => {
  return await http.post(ENDPOINTS.login, data)
}
