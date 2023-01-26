import "./App.css";
import { useState } from "react";
import Rating from "./components/Rating"
import ThankYou from "./components/ThankYou";
function App() {
  const [isSubmited,setIsSumbited]=useState(false);
  const [item,setItems]=useState();
  const changeStateSubmited=()=>{
    setIsSumbited(true);
  }
  function changeItem(m){
    setItems(m);

  }
  return (
    <div className="App">
      {!isSubmited && <Rating changeStateSubmited={changeStateSubmited} changeItem={changeItem} />}
      
      { isSubmited && <ThankYou item={item} /> }
    </div>
  );
}


export default App;
