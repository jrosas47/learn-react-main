import React from 'react'

export default function App() {
  return (
    <div className="app-container">
      <header className="hero">
        <h1>Bienvenido a React (Vite)</h1>
        <p>
          Este es un ejemplo sencillo de Home Page para practicar y explicar los conceptos
          básicos de React.
        </p>
      </header>

      <main className="content">
        <section>
          <h2>¿Qué puedes practicar aquí?</h2>
          <ul>
            <li>Crear y organizar componentes</li>
            <li>Manejar propiedades (props) y estado</li>
            <li>Eventos y manejo de formularios</li>
            <li>Renderizado condicional y listas</li>
          </ul>
        </section>

        <section>
          <h2>Instrucciones rápidas</h2>
          <ol>
            <li>Instala Node.js (si aún no lo tienes).</li>
            <li>Abre una terminal en la carpeta <code>react-welcome-home</code>.</li>
            <li>Ejecuta <code>npm install</code> para instalar dependencias.</li>
            <li>Luego ejecuta <code>npm run dev</code> para levantar el proyecto.</li>
          </ol>
          <p>
            Una vez corriendo, abre el navegador en <code>http://localhost:5173</code>.
          </p>
        </section>
      </main>

      <footer className="footer">
        <span>Proyecto de ejemplo para aprender React.</span>
      </footer>
    </div>
  )
}

