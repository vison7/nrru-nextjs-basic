# Define the builder stage
FROM node:18-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy all the files
COPY . .

EXPOSE 3000

ENV PORT=3000

# Build the Next.js app
# RUN npm run dev
CMD ["npm","run", "dev"]