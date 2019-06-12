const API_HOST='demoapp'; //use the kubernetes node name 
const API_PORT='30100'; //use the kubernetes nodeport on which api service  is running 
export const environment = {
  production: true,
  API_ENDPOINT : 'http://' + API_HOST + ':' + API_PORT + '/api'
  // API_ENDPOINT : '/api' //  this is proxy url handled by the nginx to be reidrected to  the correct endpoint 
};
