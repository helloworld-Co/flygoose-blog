FROM node:18.19-alpine3.18 as builder

COPY . /hellworld-blog

WORKDIR /hellworld-blog

RUN yarn install --no-frozen-lockfile --registry=https://registry.npm.taobao.org

RUN yarn build

# deploy flygoose web
FROM node:18.19-alpine3.18

RUN npm install -g pm2 --registry=https://registry.npm.taobao.org

RUN adduser -D -u 6666 www

RUN mkdir -p /apps/hellworld-blog ; chown -R www /apps/hellworld-blog/

USER www

#copy flygoose web
COPY --from=builder /hellworld-blog/node_modules /apps/hellworld-blog/node_modules
COPY --from=builder /hellworld-blog/nuxt.config.ts /apps/hellworld-blog/
COPY --from=builder /hellworld-blog/package.json /apps/hellworld-blog/
COPY --from=builder /hellworld-blog/pm2.config.js /apps/hellworld-blog/
COPY --from=builder /hellworld-blog/server /apps/hellworld-blog/server
COPY --from=builder /hellworld-blog/.nuxt /apps/hellworld-blog/.nuxt
COPY --from=builder /hellworld-blog/.output /apps/hellworld-blog/.output

WORKDIR /apps/hellworld-blog/

EXPOSE 58081

CMD ["sh", "-c", "pm2 start pm2.config.js ; pm2 logs"]