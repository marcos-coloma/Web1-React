import './App.css'

function App() {
  return (
    <div className="container">
      <h1>Mi To-Do List</h1>

      <div className="form">
        <input type="text" placeholder="Agregar tarea..." />
        <button>ADD</button>
      </div>

      <ul className="list">
        <li className="item">
          <input type="checkbox" />
          <span>Tarea 1</span>
          <button>Eliminar</button>
        </li>

        <li className="item">
          <input type="checkbox" />
          <span>Tarea 2</span>
          <button>Eliminar</button>
        </li>

        <li className="item">
          <input type="checkbox" />
          <span>Tarea 3</span>
          <button>Eliminar</button>
        </li>
      </ul>
    </div>
  )
}

export default App