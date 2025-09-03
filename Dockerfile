FROM node:20.11.0-alpine3.19 as base

WORKDIR /app

COPY package.json .
COPY package-lock.json .

COPY apps/invox/package.json /app/apps/invox/package.json
COPY packages/shared/package.json /app/packages/shared/package.json

RUN npm i

# RUN chown root:root node_modules



FROM node:20.11.0-alpine3.19 as local

WORKDIR /app

COPY --from=base /app /app/

EXPOSE 3000
