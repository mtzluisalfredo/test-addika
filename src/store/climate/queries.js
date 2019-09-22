import axios from '../../utils/axios'
import api from '../../utils/services'

export const forecastQuery = () => {
  return axios()
    .get(api.server)
    .then(res => res.data)
    .catch(err => err.response.data)
};
