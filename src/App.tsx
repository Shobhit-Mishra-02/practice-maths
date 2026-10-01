import "./App.css";
import { MenuContainer, PracticeFactory } from "./components";
import { MENU_OPTIONS } from "./constants";
import { useMenuStore } from "./store";
import { Heading } from "./components/common";

function App() {
  const setOption = useMenuStore((state) => state.setOption);
  const option = useMenuStore((state) => state.selectedOption);

  if (option !== null) {
    return <PracticeFactory optionId={option} />;
  }

  return (
    <div className="bg-amber-50 w-full h-[100vh]">
      <Heading>Welcome to mental math checkup !!</Heading>
      <MenuContainer
        heading={"Select an option"}
        options={MENU_OPTIONS}
        handleOptionSelect={(opt: string) => setOption(opt)}
      />
    </div>
  );
}

export default App;
