import Container from "./components/Container";
import { useState } from "react";
function App() {
  const [darkToggle, setDarkToggle] = useState(false);
  return (
    <div className={`app ${darkToggle && `dark`}`}>
      <Container darkToggle={darkToggle} setDarkToggle={setDarkToggle} />
    </div>
  );
}

export default App;
