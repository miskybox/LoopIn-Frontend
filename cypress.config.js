import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    specPattern: "cypress/integration/**/*.js", 
    supportFile: false,  
    baseUrl: "http://localhost:5174",  
  },
});
