import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

function App() {
  return (
    <div>
      <h1>Mi To-Do List</h1>

      <div>
        <input type="text" placeholder="Agregar tarea..." />
        <button>ADD</button>
      </div>

      <ul>
        <li>
          <input type="checkbox" />
          <span>Tarea 1</span>
          <button>Eliminar</button>
        </li>

        <li>
          <input type="checkbox" />
          <span>Tarea 2</span>
          <button>Eliminar</button>
        </li>

        <li>
          <input type="checkbox" />
          <span>Tarea 3</span>
          <button>Eliminar</button>
        </li>
      </ul>
    </div>
  )
}

export default App
