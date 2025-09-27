# Use Node.js base image
FROM node:20

# Set working directory inside container
WORKDIR /app

# Copy package.json and package-lock.json from app folder
COPY app/package*.json ./

# Install dependencies
RUN npm install

# Copy app folder contents
COPY app ./

# Expose port
EXPOSE 8080

# Start app
CMD ["node", "index.js"]

