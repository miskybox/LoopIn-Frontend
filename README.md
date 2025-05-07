# 🚀 Loopin - Frontend

Loopin es la plataforma web desarrollada por **Code Crafters** que conecta a la comunidad tecnológica global a través de eventos presenciales y online. Este repositorio contiene el código del **frontend**, construido con React.js y diseñado bajo los principios de Atomic Design.

## 🌐 Descripción

Loopin permite a cualquier usuario registrado:

- Crear, editar y eliminar eventos tecnológicos.
- Apuntarse o desapuntarse de eventos.
- Ver detalles de eventos públicos sin necesidad de autenticación.
- Gestionar su perfil y ver sus inscripciones.
- Filtrar eventos por tipo, fecha, creador o nombre.

## 🛠 Tecnologías y herramientas

- **React.js 19**
- **Vite**
- **HTML5 + CSS3**
- **JavaScript ES6+**
- **React Router**
- **Atomic Design**
- **Figma** (para prototipos)
- **Postman** (para pruebas de la API)
- **Git & GitHub**

## 🧱 Estructura del proyecto
loopin-frontend/
├── package.json
├── vite.config.js
├── public/
├── src/
│ ├── App.jsx
│ ├── main.jsx
│ ├── index.css
│ ├── App.css
│ ├── assets/ # Imágenes y recursos estáticos
│ ├── components/ # Componentes atómicos y reutilizables
│ └── pages/ # Vistas principales (Home, Login, Registro, Eventos, etc.)

## ✅ Requisitos funcionales implementados (Frontend)

- Página de inicio informativa sobre Code Crafters.
- Visualización de eventos sin autenticación.
- Filtros por categoría, nombre de evento, usuario y fecha.
- Sistema de registro, login y logout.
- Gestión de eventos y perfil para usuarios autenticados.
- Prevent duplication: un usuario no puede inscribirse más de una vez en el mismo evento.
- Responsive design para escritorio y móvil.

## 🔒 Autenticación

- Implementada mediante **JWT (JSON Web Token)**.
- Integración con el backend desarrollado en Spring Boot.

## 🎨 Diseño

- Diseño responsive.
- Aplicación de principios de **Atomic Design**.
- Prototipos realizados en Figma para mobile y desktop.

## 🚦 Estado del proyecto

✅ Sprint 1:  
- Maquetación inicial  
- Routing y estructura de carpetas  
- Página de inicio y eventos públicos

🚧 Sprint 2 (en curso):  
- Registro e inicio de sesión  
- Gestión de eventos por usuario  
- Filtrado y paginación  
- Integración completa con el backend

## ▶️ Cómo ejecutar el proyecto

1. Clona el repositorio:
   ```bash
   git clone https://github.com/miskybox/LoopIn-Frontend.git

Instala las dependencias:
npm install
Inicia el servidor de desarrollo:
npm run dev
Abre en el navegador:
http://localhost:5173
Nota: Asegúrate de tener corriendo el backend en http://localhost:8080 o actualiza el endpoint base según corresponda.
👥 Equipo de desarrollo

Proyecto desarrollado por el equipo Code Crafters como parte del bootcamp FemCoders - Factoría F5.
Guadalupe Hani Product Owner Frontend Developer. 
https://github.com/GuadalupeSchajris
https://www.linkedin.com/in/guadalupe-hani/

Mariana Marin Flor Scruum Master Frontend Developer.
https://github.com/marianamarinflor622
https://www.linkedin.com/in/mariana-marin-1b6268348/

Miriam Sanchez Ordoñez Fontend Developer.
https://github.com/edmimi
https://www.linkedin.com/in/miriam-sanchez-ordoñez/

Eva Sisali Guzman Frontend/Backend Developer.
https://github.com/miskybox
https://www.linkedin.com/in/eva-sisalli-guzman/

tetiana Vashchenko  Frontend Developer.
https://github.com/Tetiana-BCN
https://www.linkedin.com/in/tetianav/


📄 Licencia

Este proyecto es de uso educativo y está bajo licencia MIT.
