# 🌐 Express Backend API Proxy

Este backend está desarrollado con **Node.js + Express** y actúa como intermediario entre el frontend y varias APIs externas. Su propósito principal es **ocultar las API keys** y gestionar peticiones seguras desde el cliente.

---

## 🚀 Características

- Proxy para APIs externas:
  - OpenWeather
  - GeoNames
  - Foursquare Places
- Ocultamiento seguro de API keys con variables de entorno
- Validaciones con `express-validator`
- Estructura modular: rutas, controladores y middlewares separados

---

## 📁 Estructura del proyecto

```

project-backend/
├── controllers/
│   ├── weatherController.js
│   ├── geoNamesController.js
│   └── fourSquareController.js
├── routes/
│   ├── weatherRoutes.js
│   ├── geoNamesRoutes.js
│   └── fourSquareRoutes.js
├── middlewares/
│   └── validarErrores.js
├── .env
├── server.js
└── package.json

````

---

## 🛠️ Instalación y ejecución

1. Clona el repositorio

```bash
git clone https://github.com/tu-usuario/project-backend.git
cd project-backend
```

2. Instala dependencias

```bash
npm install
```

3. Agrega tu archivo `.env`

4. Inicia el servidor

```bash
node server.js
```

---

## 📡 Endpoints disponibles

### 🔸 `GET /api/weather?city=nombre`

Consulta el clima actual de una ciudad.

### 🔸 `GET /api/places?city=nombre`

Busca lugares geográficos con GeoNames.

### 🔸 `GET /api/foodsPlaces?nameCity=nombre`

Obtiene lugares relacionados con comida desde Foursquare.

---

## 🔐 Validaciones

Todas las rutas validan los parámetros de entrada usando `express-validator` y devuelven errores claros en formato JSON si faltan campos o están mal formados.

---

## 🧑‍💻 Autor

* Nombre: [ Brando Avila ]
* Licenciatura en Desarrollo y Gestión de Software
* GitHub: [@BrandoAp](https://github.com/BrandoAp)

---

## 📜 Licencia

Este proyecto está bajo la licencia ISC.
