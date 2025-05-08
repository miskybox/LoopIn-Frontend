import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    specPattern: "cypress/integration/**/*.js", // Ruta a tus archivos de prueba
    supportFile: false,  // Desactivar el archivo de soporte
    baseUrl: "http://localhost:5174",  // Agrega tu URL base
  },
});
