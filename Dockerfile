# ----- Etapa 1: Construcción (Build Stage) -----
FROM node:20-alpine AS build

# --- ¡NUEVO! ---
# Declara el argumento de build que recibiremos de cloudbuild.yaml
ARG VITE_API_URL
ARG VITE_CONTENTFUL_SPACE_ID
ARG VITE_CONTENTFUL_ACCESS_TOKEN

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .

# --- ¡NUEVO! ---
# Crea el archivo .env.production DENTRO del contenedor.
# Vite lo leerá automáticamente al hacer el build.
RUN echo "VITE_API_URL=${VITE_API_URL}" > .env
RUN echo "VITE_CONTENTFUL_SPACE_ID=${VITE_CONTENTFUL_SPACE_ID}" >> .env
RUN echo "VITE_CONTENTFUL_ACCESS_TOKEN=${VITE_CONTENTFUL_ACCESS_TOKEN}" >> .env
# Ahora, cuando se ejecute build, VITE_API_URL existirá
RUN npm run build

# ----- Etapa 2: Servicio (Serve Stage) -----
FROM nginx:1.27-alpine AS final
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]