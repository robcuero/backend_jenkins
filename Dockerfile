# Etapa 1: Construcción de la aplicación
FROM node:18 AS build

# Establecer el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar el archivo de configuración package.json y package-lock.json
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto del código de la aplicación
COPY . .

# Exponer el puerto en el que se ejecuta la aplicación (por defecto 3000)
EXPOSE 3000

# Iniciar la aplicación
CMD ["npm", "start"]
