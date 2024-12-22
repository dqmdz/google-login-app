# Google Login App

Una aplicación simple de React que implementa el inicio de sesión con Google utilizando el componente `@react-oauth/google`.

## Características

- Inicio de sesión con Google
- Interfaz de usuario minimalista y centrada
- Botón de inicio de sesión personalizable

## Tecnologías Utilizadas

- React
- @react-oauth/google

## Configuración

1. Instala las dependencias necesarias:

```bash
npm install @react-oauth/google
```

2. Asegúrate de tener las credenciales de Google OAuth configuradas en tu proyecto:
   - Visita [Google Cloud Console](https://console.cloud.google.com)
   - Crea un proyecto o selecciona uno existente
   - Configura las credenciales de OAuth 2.0
   - Obtén tu Client ID

3. Envuelve tu aplicación con el `GoogleOAuthProvider` y proporciona tu Client ID:

```jsx
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.render(
  <GoogleOAuthProvider clientId="tu-client-id">
    <App />
  </GoogleOAuthProvider>,
  document.getElementById('root')
);
```

## Uso

El componente principal `App.jsx` implementa un botón de inicio de sesión de Google con las siguientes características:

- Manejo de éxito y error en el inicio de sesión
- Estilo personalizado del botón (tema azul, forma rectangular)
- Tamaño grande para mejor visibilidad

## Personalización

El botón de Google Login puede ser personalizado mediante las siguientes propiedades:

- `type`: "standard"
- `theme`: "filled_blue"
- `text`: "signin_with"
- `shape`: "rectangular"
- `size`: "large"

## Contribución

Siéntete libre de contribuir a este proyecto. Puedes:

1. Fork el repositorio
2. Crear una rama para tu característica (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request


