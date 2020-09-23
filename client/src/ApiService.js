const BASE_URL = 'http://localhost:3001';

// possible to refactor into a 'fetch factory' to reduce repetition

const apiService = {};

apiService.register = (user) => {
  return fetchRequest('/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  }
  )
};

apiService.login = (user) => {
  return fetchRequest( '/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
};

apiService.profile = () => {
  return fetchRequest('/me')
};

apiService.logout = () => {

};

function fetchRequest (path, options) {
  return fetch(BASE_URL + path, {
    mode: 'cors',
    credentials: 'include',
    ...options
  })
    .then((res) => {
      console.log(res);
      return res.status <= 400 ? res : Promise.reject(res)
    })
    .then(res => res.status !== 204 ? res.json() : res)
    .catch(o_O => console.error(o_O))
}

export default apiService;