# phase1
FROM node:22.16.0-alpine AS build
WORKDIR /app
COPY . .

RUN npm install
RUN npm run build

# phase2
FROM node:22.16.0-alpine 
WORKDIR /app
COPY package*.json ./

RUN npm install --only=production
COPY --from=build /app/dist ./dist 

CMD ["node", "dist/src/index.js"]