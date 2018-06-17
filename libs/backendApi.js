//const CookieManager = require('react-native-cookies');
//const apiurl = 'https://localhost:60701/';
//import { loggedIn } from './modifyData';
import { connect } from 'react-redux';
import { loggedIn } from '../redux';

const apiurl =
  'http://planttrackerservice-planttrackerservice.a3c1.starter-us-west-1.openshiftapps.com/';

postData = (url, data) => {
  // Default options are marked with *
  console.warn('Inside postdata');
  return fetch(url, {
    body: JSON.stringify(data), // must match 'Content-Type' header
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, same-origin, *omit
    headers: {
      'content-type': 'application/json'
    },
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, cors, *same-origin
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer' // *client, no-referrer
  }).then(response => {
    /*    console.warn(
      'Received response on login with: ',
      response.headers.get('set-cookie'),
      'response: ',
      response.headers
    );
*/ return response.json(); // parses response to JSON
  });
};
getData = url => {
  // Default options are marked with *
  console.warn('Inside getdata');
  return fetch(url, {
    cache: 'no-cache', //  *default, no-cache, reload, force-cache, only-if-cached
    //credentials: 'same-origin', // include, same-origin, *omit
    headers: {
      'content-type': 'application/json'
    },
    method: 'GET' // *GET, POST, PUT, DELETE, etc.
    //mode: 'cors', // no-cors, cors, *same-origin
    //redirect: 'follow', // manual, *follow, error
    //referrer: 'no-referrer' // *client, no-referrer
  }).then(response => {
    /*    console.warn(
      'Received response on ',
      url,
      ' with: ',
      response.headers.get('set-cookie'),
      'response: ',
      response
    );
  */ return response.json(); // parses response to JSON
  });
};
login = () => {
  console.warn('Trying to log in');
  postData(apiurl + 'login', {
    email: 'iga.kowalska@gmail.com',
    password: 'dfvetnjjymiubvcr'
  })
    .then(data => {
      //console.warn('Postdata returned data: ', data);
      console.warn('Logged in, returning true');
      loggedIn();
      //return true;
    })
    .catch(error => {
      console.error('Postdata returned error: ', error);
      throw error;
      //return false;
    });
  console.warn('Below postData');
};

fetchPlants = () => {
  getData(apiurl + 'myPlants')
    .then(data => {
      console.warn('Getdata returned data: ', data);
      return data;
    })
    .catch(error => console.error('Getdata returned error: ', error));
};

export { login, fetchPlants };
