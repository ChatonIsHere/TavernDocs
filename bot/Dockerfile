# TavernDocs bot. Build from this folder: docker build -t taverndocs-bot .
FROM node:24.13.1-slim AS builder
WORKDIR /bot
COPY package.json package-lock.json ./
RUN npm ci
COPY tsconfig.json tsconfig.build.json ./
COPY src ./src
RUN npm run build

# Debian, not Alpine: the semantic model's runtime (onnxruntime-node) needs glibc.
FROM node:24.13.1-slim
ENV NODE_ENV=production DATA_DIR=/data HEALTH_PORT=8080
WORKDIR /app
COPY --from=builder /bot/package.json /bot/package-lock.json ./
RUN npm ci --omit=dev && npm cache clean --force
COPY --from=builder /bot/dist ./dist
RUN mkdir -p /data && chown node:node /data
USER node
VOLUME /data
CMD ["node", "dist/main.js"]
