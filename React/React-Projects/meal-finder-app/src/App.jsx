import { useState } from "react";
import Meal from "./components/Meal";
function App() {
  const [count, setCount] = useState(5);

  return (
    <>
      <Meal />
    </>
  );
}

export default App;
