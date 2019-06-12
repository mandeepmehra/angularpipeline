# Create image based on the official Node 10 image from dockerhub
FROM mandeepmehra/angular-cli:2.0 as builder

ARG configuration


# Create a directory where our app will be placed
RUN mkdir -p /app

# Change directory so that our commands run inside this new directory
WORKDIR /app

# Copy dependency definitions
COPY package*.json /app/

ENV NODE_ENV=$configuration,
ENV npm_package_config_configuration=$configuration
# Install dependecies
RUN npm install

# Get all the code needed to run the app
COPY . /app/

## Build the angular app in production mode and store the artifacts in dist folder
RUN ng build --configuration=$configuration


### STAGE 2: Setup ###

FROM nginx:1.14.1-alpine

## Copy our default nginx config
COPY nginx/default.conf /etc/nginx/conf.d/

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

## From ‘builder’ stage copy over the artifacts in dist folder to default nginx public folder
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 8080
RUN chown -R nginx:nginx /usr/share/nginx/html/angular-client

CMD ["nginx", "-g", "daemon off;"]