import axos from 'axios';

const REST_API_URL = 'http://localhost:8080/api/employees';

export const listEmployees = () => {
  return axos.get(REST_API_URL);
};
