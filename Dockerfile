FROM node:5.12.0

# Create working directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle application
COPY . /usr/src/app

# Setup
EXPOSE 3000

# Run application
CMD ["npm", "start"]
