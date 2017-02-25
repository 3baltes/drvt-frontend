FROM nginx:alpine
MAINTAINER Florian Baltes <florian.baltes@studium.uni-hamburg.de>
COPY dist /usr/share/nginx/html
ADD nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80