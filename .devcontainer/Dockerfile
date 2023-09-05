ARG NODE_VERSION=20.0.0
ARG ALPINE_VERSION=3.17.2

FROM node:${NODE_VERSION}-alpine AS node

FROM alpine:${ALPINE_VERSION}

WORKDIR /app

RUN apk update
RUN apk upgrade
# RUN apk add bash git github-cli
# RUN apk add zsh git github-cli
RUN apk add git github-cli

# COPY all the files from Current Directory into the Container
# COPY ./ ./

# ENV NPM_CONFIG_PREFIX=/home/node/.npm-global

# optionally if you want to run npm global bin without specifying path
# ENV PATH=$PATH:/home/node/.npm-global/bin

# ENV PATH /app/node_modules/.bin:$PATH

# Default powerline10k theme, no plugins installed
# RUN sh -c "$(wget -O- https://github.com/deluan/zsh-in-docker/releases/download/v1.1.5/zsh-in-docker.sh)"

# install nvm
# https://github.com/creationix/nvm#install-script
# RUN curl -o- https://raw.githubusercontent.com/creationix/nvm/v$NVM_VERSION/install.sh | bash

# install node and npm
# RUN source $NVM_DIR/nvm.sh \
#     && nvm install $NODE_VERSION \
#     && nvm alias default $NODE_VERSION \
#     && nvm use default

COPY --from=node /usr/lib /usr/lib
COPY --from=node /usr/local/lib /usr/local/lib
COPY --from=node /usr/local/include /usr/local/include
COPY --from=node /usr/local/bin /usr/local/bin

# add user with sudo privileges within Docker container
# without adduser input questions
# http://askubuntu.com/questions/94060/run-adduser-non-interactively/94067#94067
# RUN USER="testuser" && \
#   adduser --disabled-password --gecos "" $USER && \
#   sudo usermod -a -G sudo $USER && \
#   echo "$USER:abc123" | chpasswd && \
#   su - $USER # switch to testuser

RUN node -v

# RUN npm i --global --unsafe-perm nx
# RUN npm --global config set user root && \
#   npm --global install nx
# RUN npm i -g nx --force
# RUN nx -v

RUN npm i -g pnpm nx --force
# RUN firebase --help

# RUN npm i -g pnpm
# RUN pnpm -v

# install common full-stack JavaScript packages globally
# http://blog.nodejs.org/2011/03/23/npm-1-0-global-vs-local-installation
# RUN sudo npm install -g express

# optional, check locations and packages are correct
# RUN which node; node -v; which npm; npm -v; \
#   npm ls -g --depth=0

# RUN npx nx@latest init

# WORKDIR /usr/src/app

# Copy installed dependencies from dependencies stage
# COPY --from=dependencies /usr/src/app/node_modules ./node_modules

# Copy built application files
# COPY ./ ./

# RUN pnpm install --global nx@latest
# RUN npx nx@latest init
# Run the application under "node" user by default
# RUN chown -R node:node .
# USER node
# EXPOSE 3000

# RUN nx -v

RUN git -v

CMD ["pnpm", "install"]

# CMD ["node", "/script.js"]
