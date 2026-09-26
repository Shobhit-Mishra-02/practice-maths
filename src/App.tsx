import './App.css'
import { MENU_OPTIONS } from './constants'
import { useMenuStore } from './store'

function App() {
  const setOption = useMenuStore(state => state.setOption)

  return (
    <div>
      <h2>Welcome to mental math checkup !!</h2>

      <div>
        <h4>Select an option</h4>
        {
          MENU_OPTIONS.map(option => <button key={option.id} onClick={() => setOption(option.id)}>{option.name}</button>)
        }
      </div>
    </div>
  )
}

export default App
