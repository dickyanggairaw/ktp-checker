FROM public.ecr.aws/docker/library/node:16-alpine

ENV PATH=$PATH:/home/node/.npm-global/bin

USER node
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH=$PATH:/home/node/.npm-global/bin

WORKDIR /home/node
COPY package.json .
RUN npm install 
COPY . .

EXPOSE 3000

# Running application
CMD [ "node", "index.js" ]