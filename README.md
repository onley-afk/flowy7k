# Flowy7k - Tienda Online Argentina 🇦🇷

Plataforma de e-commerce moderna con integración de Mercado Pago, cálculo de IVA y gestión de envíos para Argentina.

## 🚀 Features

- ✅ Carrito de compras dinámico
- ✅ Integración con **Mercado Pago**
- ✅ Cálculo automático de IVA (21%)
- ✅ Gestión de envíos (provincias ARG)
- ✅ Panel admin completo
- ✅ Gestión de productos y categorías
- ✅ Sistema de usuarios y autenticación
- ✅ Historial de órdenes

## 🛠️ Stack Tecnológico

### Frontend
- React 18+
- Tailwind CSS
- Axios
- Zustand (State Management)

### Backend
- Node.js + Express
- MongoDB
- JWT Authentication
- Mercado Pago SDK

## 📋 Requisitos Previos

- Node.js 18+
- npm o yarn
- MongoDB local o Atlas
- Cuenta en Mercado Pago (para credenciales)

## 🔧 Instalación

```bash
# Clonar repositorio
git clone https://github.com/onley-afk/flowy7k.git
cd flowy7k

# Instalar dependencias del backend
cd backend
npm install

# Instalar dependencias del frontend
cd ../frontend
npm install
```

## ⚙️ Configuración

### Backend (.env)
```
MONGODB_URI=mongodb://localhost:27017/flowy7k
JWT_SECRET=your_jwt_secret
MERCADO_PAGO_TOKEN=your_mp_token
MERCADO_PAGO_PUBLIC_KEY=your_mp_public_key
NODE_ENV=development
PORT=5000
```

### Frontend (.env.local)
```
REACT_APP_API_URL=http://localhost:5000
REACT_APP_MERCADO_PAGO_PUBLIC_KEY=your_mp_public_key
```

## 📁 Estructura del Proyecto

```
flowy7k/
├── backend/
│   ├── src/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── utils/
│   │   └── server.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── store/
│   │   ├── services/
│   │   └── App.jsx
│   └── package.json
└── README.md
```

## 🚀 Iniciar Desarrollo

```bash
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend
cd frontend
npm run dev
```

## 💳 Integración Mercado Pago

1. Ir a [Mercado Pago Developers](https://www.mercadopago.com.ar/developers)
2. Crear una aplicación
3. Obtener credenciales (Public Key y Access Token)
4. Configurar en archivos .env

## 📦 Provincias Soportadas (Argentina)

- Buenos Aires
- Catamarca
- Chaco
- Chubut
- Córdoba
- Corrientes
- Entre Ríos
- Formosa
- Jujuy
- La Pampa
- La Rioja
- Mendoza
- Misiones
- Neuquén
- Río Negro
- Salta
- San Juan
- San Luis
- Santa Cruz
- Santa Fe
- Santiago del Estero
- Tierra del Fuego
- Tucumán

## 📄 Licencia

MIT

## 👤 Autor

onley-afk
