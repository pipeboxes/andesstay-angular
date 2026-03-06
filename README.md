# AndesStay 🏨

Aplicación web desarrollada con **Angular** que simula una plataforma de búsqueda de hoteles similar a Airbnb o Booking.
El proyecto muestra una lista de hoteles, permite navegar a la vista de detalle y está estructurado con componentes reutilizables y arquitectura modular.

---

## 🚀 Tecnologías utilizadas

* **Angular (Standalone Components)**
* **TypeScript**
* **SCSS**
* **Angular Router**
* **RxJS**
* **HTML5**

---

## 📂 Estructura del proyecto

```
src/app
│
├── components
│   ├── navbar
│   └── hotel-card
│
├── pages
│   ├── home
│   ├── hotel-detail
│   └── favorites
│
├── services
│   ├── hotels.ts
│   └── favorites.ts
│
├── models
│
├── app.ts
├── app.routes.ts
└── app.config.ts
```

### Descripción

**components/**

* Componentes reutilizables de la aplicación.

**pages/**

* Páginas principales que se renderizan mediante rutas.

**services/**

* Manejo de datos y lógica de negocio.

**models/**

* Interfaces y tipos de datos.

---

## 🧠 Arquitectura

La aplicación sigue una arquitectura basada en:

```
Services → Components → Views
```

Ejemplo de flujo:

```
HotelsService
      ↓
Home Component
      ↓
HotelCard Component
      ↓
Renderizado en la vista
```

---

## 🌐 Rutas de la aplicación

| Ruta          | Descripción                |
| ------------- | -------------------------- |
| `/`           | Lista de hoteles           |
| `/hotels/:id` | Detalle del hotel          |
| `/favorites`  | Lista de hoteles favoritos |

---

## ⚙️ Instalación del proyecto

Clonar repositorio:

```bash
git clone https://github.com/TU-USUARIO/andesstay-angular.git
```

Entrar al proyecto:

```bash
cd andesstay-angular
```

Instalar dependencias:

```bash
npm install
```

Ejecutar el servidor de desarrollo:

```bash
ng serve
```

Abrir en el navegador:

```
http://localhost:4200
```

---

## ✨ Funcionalidades actuales

* Listado de hoteles
* Tarjetas de hotel reutilizables
* Navegación con Angular Router
* Página de detalle de hotel
* Navbar y footer
* Arquitectura modular escalable

---

## 🔮 Próximas mejoras

* Sistema de **favoritos**
* **Persistencia con LocalStorage**
* **Imágenes reales de hoteles**
* **Animaciones**
* **Filtros de búsqueda**
* **Diseño responsive completo**

---

## 👨‍💻 Autor

**Felipe Cajas Maureira**

* Full-Stack Developer (en formación)
* Enfermero universitario
* Interés en desarrollo web y aplicaciones modernas

LinkedIn: *(https://www.linkedin.com/in/felipe-ignacio-cajas-maureira-95a6a1307/)*
GitHub: *(pipeboxes)*

---

## 📄 Licencia

Este proyecto fue desarrollado con fines educativos y de portafolio.
