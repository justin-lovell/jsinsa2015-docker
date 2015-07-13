FROM    ubuntu:14.04

# install nodejs and npm
RUN     apt-get update
RUN     apt-get install -y nodejs npm
RUN     ln -s /usr/bin/nodejs /usr/bin/node

RUN     npm install -g node-inspector

# Bundle app source
COPY    . /src

# Install app dependencies
RUN     cd /src; npm install

EXPOSE  3000

WORKDIR    /src
ENTRYPOINT ["npm"]
CMD        ["start"]
