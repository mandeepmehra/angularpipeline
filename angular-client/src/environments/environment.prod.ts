const API_HOST='kworker1'; //use the kubernetes node name 
const API_PORT='30014'; //use the kubernetes nodeport on which api service  is running 
export const environment = {
  production: true,

  API_ENDPOINT : 'http://' + API_HOST + ':' + API_PORT + '/api'
};
