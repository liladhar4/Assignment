import React from "react";
import Board from "./Component/board";
import './style/box.css';
import './style/board.css';



class App extends React.Component{
  render(){
    return(
    <div className="app">
      <Board />
      
    </div>
    )
  }
}
export default App
