# Stage 1: Build the React app
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./src ./src
COPY ./public ./public
RUN npm run build

# Stage 2: Serve the static files using a lightweight server
FROM node:18-alpine
WORKDIR /app
# Cài đặt 'serve' để phục vụ file tĩnh
RUN npm install -g serve
COPY --from=build /app/build ./build
EXPOSE 3000
# Chạy server 'serve' trên thư mục build
CMD ["serve", "-s", "build", "-l", "3000"]