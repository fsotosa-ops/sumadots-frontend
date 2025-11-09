// Archivo: src/lib/contentfulClient.js

import { createClient } from 'contentful';

// Lee las variables de entorno de Vite (import.meta.env)
const spaceId = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
const accessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;

// Valida que las variables de entorno estén presentes
if (!spaceId || !accessToken) {
  throw new Error(
    "Error de configuración: Faltan las variables de entorno de Contentful. " +
    "Asegúrate de que VITE_CONTENTFUL_SPACE_ID y VITE_CONTENTFUL_ACCESS_TOKEN estén definidas en tu archivo .env"
  );
}

// Crea y exporta el cliente de Contentful
// Este cliente se usará para hacer las peticiones de 'Content Delivery' (lectura)
export const contentfulClient = createClient({
  space: spaceId,
  accessToken: accessToken,
});