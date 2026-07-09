FROM node:latest
WORKDIR /app
COPY package*.json ./
RUN npm install 
ExPOSE 3000
COPY . .
CMD ["npm", "start"]