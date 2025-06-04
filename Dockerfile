# Use an official Node.js base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy only the backend folder into the container
COPY p-w.backend ./p-w.backend

# Set working directory to the backend folder
WORKDIR /app/p-w.backend

# Install dependencies
RUN npm install

# Expose the port your app listens on
EXPOSE 3000

# Start the server
CMD ["npm", "start"]
