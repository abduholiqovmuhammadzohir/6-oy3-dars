
import "./App.css"

import Header from "./components/Header";
import Card from "./components/Card";
import Cardimg from "./components/Cardimg";


function App() {
  return (
    <>

      <div className="container">
        <Header></Header>
        <div className="cards">
          <Card></Card>
          <Cardimg></Cardimg>
        </div>

      </div>

    </>
  )
}


export default App
