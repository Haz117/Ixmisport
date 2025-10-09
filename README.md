# IxmiSport 🏟️⚽

## Descripción

Aplicación web para la reservación de canchas deportivas del Ayuntamiento de Ixmiquilpan. Este sistema permite a los ciudadanos reservar espacios deportivos de manera fácil y eficiente.

## 🎯 Características

- **Página Principal (Home)**: Bienvenida e información general
- **Sistema de Autenticación**: Login y registro de usuarios
- **Reservación de Canchas**: Sistema para reservar canchas deportivas disponibles

## 🛠️ Tecnologías

- **Vue 3**: Framework JavaScript progresivo
- **Vue Router**: Manejo de rutas
- **Tailwind CSS**: Framework de estilos (via CDN)
- **Vite**: Herramienta de desarrollo rápida

## 📂 Estructura del Proyecto

```
IxmiSport/
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/
│   ├── components/
│   ├── router/
│   │   └── index.js          # Configuración de rutas
│   ├── views/
│   │   ├── Home.vue          # Página principal
│   │   ├── Login.vue         # Inicio de sesión
│   │   ├── Register.vue      # Registro de usuarios
│   │   └── Reservaciones.vue # Reservación de canchas
│   ├── App.vue
│   └── main.js
├── index.html
├── package.json
└── vite.config.js
```

## 🚀 Instalación

1. Clonar el repositorio:
```bash
git clone [URL_DEL_REPOSITORIO]
cd IxmiSport
```

2. Instalar dependencias:
```bash
npm install
```

3. Ejecutar el servidor de desarrollo:
```bash
npm run dev
```

4. Abrir en el navegador:
```
http://localhost:5173
```

## 📋 Rutas Disponibles

| Ruta | Descripción |
|------|-------------|
| `/` | Página principal |
| `/login` | Inicio de sesión |
| `/register` | Registro de usuarios |
| `/reservaciones` | Sistema de reservación de canchas |

## 🏛️ Ayuntamiento de Ixmiquilpan

Este proyecto es desarrollado para el Ayuntamiento de Ixmiquilpan, Hidalgo, con el objetivo de facilitar el acceso de la ciudadanía a las instalaciones deportivas municipales.

## 📝 Scripts Disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Compilar para producción
npm run preview  # Previsualizar build de producción
```

## 👥 Contribuir

Este proyecto está en desarrollo activo. Para contribuir:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add: AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Proyecto desarrollado para el Ayuntamiento de Ixmiquilpan.

---

**Desarrollado con ❤️ para la comunidad de Ixmiquilpan**

