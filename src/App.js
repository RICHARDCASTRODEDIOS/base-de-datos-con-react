import {useState} from "react";
import Header from "./componentes/Header";
import Main from "./componentes/Main";

export default function App() {
  const [final, setTermino] = useState("");
  console.log(final)
  return (
    <div className="App">
      <Header setTermino={setTermino}/>

      <Main final={final}/>
    </div>
  );
} 


