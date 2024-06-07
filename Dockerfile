# Stage 1: Build the React app
FROM node:20.14.0

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application source code
COPY . .

# Build the React app
CMD [ "npm", "start" ] 
