/**
 * Created by saionara1 on 6/21/17.
 */
import Base64 from "./utils/Base64";

// work with api goes here

export function getRepositories(token, page, limit) {
  return fetch('https://api.github.com/user/repos?access_token=' + token + '&page=' + page, {
    method: 'GET',
    headers: {
      'Accept': 'application/vnd.github.v3.full+json',
      'Content-Type': 'application/json',
    }
  }).then((list) => {
    return list.json()
  })
    .then((responseJson) => {
      return responseJson;
    })
    .catch((error) => {
      console.log(error);
    });
}

export function getAccessToken(username, password) {
  baseString = Base64.btoa(username + ':' + password).replace('\n', '\\n');
  return fetch('https://api.github.com/authorizations/clients/ffb12e79140e7b6597ba', {
    method: 'PUT',
    headers: {
      'Accept': 'application/vnd.github.v3.full+json',
      'Content-Type': 'application/json',
      "Authorization": "Basic " + baseString
    },
    body: JSON.stringify({
      client_secret: "d07dadbce095325cebfc40a46eb467e906063927",
    })
  }).then((user) => {
    return user.json()
  })
    .then((responseJson) => {
      console.log(responseJson);
      return responseJson;
    })
    .catch((error) => {
      console.log(error);
    });
}