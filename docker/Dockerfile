FROM node:10

# Create app directory
WORKDIR /instrumentl

# Copy package.json
COPY package.json /instrumentl

# Install dependencies
RUN yarn install

# Install nodemon globally
RUN npm install -g nodemon

# Copy everything else in
COPY . /instrumentl

# Start the server
CMD nodemon -L src/server.js

# Expose the port our app runs on
EXPOSE 8080