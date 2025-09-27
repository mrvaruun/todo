# Use Node.js 20 base image
FROM node:20

# Set working directory inside container
WORKDIR /app

# Copy package.json and package-lock.json if exists
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all app files
COPY . .

# Expose port
EXPOSE 8080

# Start app
CMD ["node", "index.js"]

