FROM node:12.18.3
WORKDIR '/app'
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx
EXPOSE 80
COPY --from=0 /app/dist/portfolio-v2 /usr/share/nginx/html
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf
