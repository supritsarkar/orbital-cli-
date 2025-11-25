# frontend/Dockerfile
FROM node:20-alpine


WORKDIR /app

# Copy only package files first (better caching)
COPY package*.json ./

RUN npm ci

#copy the entire source code
COPY . .

EXPOSE 3005

CMD ["npm", "run", "dev"]
