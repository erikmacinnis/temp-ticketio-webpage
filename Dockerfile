# Use an official Node runtime as the base image
FROM node:14.9

# Set the working directory in the container
WORKDIR /

# Add `/app/node_modules/.bin` to $PATH
ENV PATH /node_modules/.bin:$PATH

# Copy package.json and package-lock.json to the working directory
COPY package.json ./
COPY package-lock.json ./

# Install app dependencies
RUN npm install --silent

# Copy the rest of the app to the working directory
COPY . ./

# Start the app
CMD ["npm", "start"]