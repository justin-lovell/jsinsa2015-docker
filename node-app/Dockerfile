FROM    ubuntu:14.04

# install nodejs and npm
RUN     apt-get update
RUN     apt-get install -y nodejs npm

# Bundle app source
COPY . /src

# Install app dependencies
RUN   cd /src; npm install

EXPOSE  8080
CMD ["nodejs", "/src/index.js"]
