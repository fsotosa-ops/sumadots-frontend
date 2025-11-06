# ----- Etapa 1: Construcción (Build Stage) -----
# Usamos una imagen oficial de Node.js para construir la app
FROM node:20-alpine AS build

# Establecemos el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiamos package.json y package-lock.json primero
# Esto aprovecha el caché de Docker si no cambian las dependencias
COPY package.json package-lock.json ./

# Instalamos las dependencias
RUN npm install

# Copiamos el resto del código fuente
COPY . .

# Ejecutamos el script de build de Vite
RUN npm run build

# ----- Etapa 2: Servicio (Serve Stage) -----
# Usamos una imagen ligera de Nginx para servir los archivos
FROM nginx:1.27-alpine AS final

# Copiamos los archivos estáticos construidos (del /app/dist) al directorio de Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Copiamos nuestra configuración personalizada de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exponemos el puerto 8080 (Cloud Run usa este puerto por defecto)
EXPOSE 8080

# Comando para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]