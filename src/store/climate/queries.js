import axios from '../../utils/axios';
import api from '../../utils/services';

const forecastQuery = () => axios()
  .get(api.server)
  .then(res => res.data)
  .catch(err => err.response.data);

export default forecastQuery;
