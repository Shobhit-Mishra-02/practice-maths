import './App.css'
import { MenuContainer, PracticeFactory } from './components'
import { MENU_OPTIONS } from './constants'
import { useMenuStore } from './store'

function App() {
  const setOption = useMenuStore(state => state.setOption)
  const option = useMenuStore(state => state.selectedOption);

  if (option !== null) {
    return <PracticeFactory optionId={option} />
  }

  return (
    <div>
      <h2>Welcome to mental math checkup !!</h2>
      <MenuContainer
        heading={"Select an option"}
        options={MENU_OPTIONS}
        handleOptionSelect={(opt: string) => setOption(opt)}
      />  
    </div>
  )
}

export default App
