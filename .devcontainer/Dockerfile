# ARG NODE_VERSION=20.0.0
# ARG ALPINE_VERSION=3.17.2

# FROM mcr.microsoft.com/devcontainers/typescript-node:20
# FROM ruipimentel/nx-devcontainer:latest
FROM whatshiywl/nrwl-base:latest
# FROM nxprivatecloud/nx-cloud-frontend:latest

# ADD file:b9e6354f7b545096b6cb6072a50de0dffa2232f22d1972a4679f46a7e6394cae in /

# FROM alpine:${ALPINE_VERSION}

# WORKDIR /app

# RUN apt-get update && apt-get install -y tini
RUN apt-get update
# RUN apt-get install -y git
# RUN apt-get install -y nx

# RUN apk add --no-cache git

# RUN apk update
# RUN apk upgrade
# RUN apk add bash git github-cli
# RUN apk add zsh git github-cli
# RUN apk add git github-cli

# COPY --from=node /usr/lib /usr/lib
# COPY --from=node /usr/local/lib /usr/local/lib
# COPY --from=node /usr/local/include /usr/local/include
# COPY --from=node /usr/local/bin /usr/local/bin

# RUN git -v
# RUN node -v

# RUN npm i -g pnpm@8.6.11 npm@10.0.0 --force --unsafe-perm
# RUN npm i -g pnpm@8.6.11 npm@10.0.0

# RUN npm -v
# RUN pnpm -v

RUN nx -v

CMD ["nx", "run-many", "-t", "lint"]
