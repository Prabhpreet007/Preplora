# Step 1: Build React app
FROM node:18 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install -g pnpm && pnpm install

COPY . .
RUN pnpm build

# Step 2: Serve with Nginx
FROM nginx:alpine

# Copy build output to nginx html folder
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
