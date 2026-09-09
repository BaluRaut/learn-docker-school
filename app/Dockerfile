# The recipe card 📝 — read top to bottom, each line bakes one LAYER 🎂
# Build:  docker build -t hello-school:v1 app/
# Run:    docker run --rm -p 3000:3000 hello-school:v1

FROM node:20-alpine
# ^ start from a pre-baked base layer: tiny Linux + Node already installed

WORKDIR /app
# ^ all following steps happen in /app inside the box

COPY server.js .
# ^ put OUR code into the box (only this file — see .dockerignore)

ENV PORT=3000 APP_VERSION=v1
# ^ default settings, overridable at run time with -e

EXPOSE 3000
# ^ documentation: "this app listens on 3000" (doesn't open anything by itself)

USER node
# ^ lesson 08: don't run as root — the base image ships a safer 'node' user

CMD ["node", "server.js"]
# ^ what happens when the box is opened (docker run)
