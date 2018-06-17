import { login, fetchPlants } from './backendApi';
import {} from './redux';

import { loadPlantsStore } from './redux';
import { bindActionCreators } from 'redux';

import {} from './HomeScreen';

let plants, result;

backendLogin = () => {
  console.warn('In backend login');
  login(); //get true/false based on the result
  //console.warn('backenLogin: received result: ', result);
  //return result;
};
retrievePlants = () => {
  plants = fetchPlants();
};

loggedIn = () => {};

export { backendLogin, retrievePlants, loggedIn };
