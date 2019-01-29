FROM node:10

# Create app directory
RUN mkdir -p /opt/instrumentl
WORKDIR /opt/instrumentl

# Copy package.json
COPY package.json /opt/instrumentl

# Install dependencies
RUN yarn install

# Copy everything else in
COPY . /opt/instrumentl

# Start the server
CMD ["npm", "start"]

# Expose the port our app runs on
EXPOSE 8080