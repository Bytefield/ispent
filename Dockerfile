# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json into the container
COPY package*.json ./

# Install any needed packages
RUN npm install

# Install expo-cli globally
RUN npm install -g expo-cli

# Copy the rest of the application code
COPY . .

# Make port 19000, 19001, and 19002 available to the world outside this container
EXPOSE 19000 19001 19002

# Define environment variable
ENV NODE_ENV=development

# Run the command to start the Expo server
CMD ["expo", "start"]
