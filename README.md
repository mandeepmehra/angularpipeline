
## to run this angular based frontend  on a   docker container  do the below 
- cd to root directory xebia-microservice-mean-backend
- run "docker-compose down  rm --all"  
- then eun docker-compose up --build 
- the above will spin up a  container runing the angular frontend  at url localhost://4200
- the  api service internally hits the api service running  at localhost://3000



## to set up the environent in kubernetes using helm do below 
- Install Kubernetes cluster lcally using minikune  ( https://kubernetes.io/docs/tasks/tools/install-kubectl/)
- Ensure cluster is running  by pointing the lubectl config to the currect  context 
- Ensure you are able  to see the clusrter nodes "kubectl get nodes"
- Ensure helm  client and server is installed 
    -https://helm.sh/docs/using_helm/#installing-helm
    -https://helm.sh/docs/using_helm/#installing-tiller
    -
## Once clusrter is set up 
- install the helm charts
- cd into dir xebia-microservice-mean-frontend
- helm install --name fe  -f ./frontend-chart/custom_values.yaml   ./frontend-chart

# to push 

curl -X POST -H "Content-Type: application/json" \
 -d '{"name":"priyanku","age":"33"}' \
http://kworker1:30100/api/users