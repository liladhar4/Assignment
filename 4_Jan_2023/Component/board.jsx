import { Component } from "react";
import Box from "./board-box";
import * as utils from '../utils/utility'


class Board extends Component{
    constructor(props){
        super(props)

        this.state ={
            boxes:Array(16).fill(null),
            history:[],
            xIsNext:true
        }
    }
     clearState = () => {
        this.setState({  boxes:Array(16).fill(null),
            history:[],
            xIsNext:true });
      }
        
    
    handleBoxClicked(index){

        const boxes = this.state.boxes.slice()
        if(boxes[index]!== null){
            return
        }

        let history = this.state.history

        if(utils.findWinner(boxes)){
            return 
        }

        if(utils.areAllBoxesCliked(boxes)===true){
            return
        }
        

        boxes[index]= this.state.xIsNext ? 'x' : 'o'

        history.push(this.state.xIsNext ? 'x' : 'o')

        this.setState({
            boxes: boxes, 
            history: history,
            xIsNext: !this.state.xIsNext
        })
    }
   

    render()
       {
        const winner = utils.findWinner(this.state.boxes)

        const isFilled = utils.areAllBoxesCliked(this.state.boxes)
        let status;

        if(winner){
            status =`the winner is ${winner}`
        }else if (!winner && isFilled){
            status = 'Game Down'
        }else{
            status = `its ${this.state.xIsNext? 'x' : 'o' } turn`
        }
       
        


        return(
            <div className="board-wrapper">
               <div className="board">
                <h2 className="board-heading">{status}</h2>
                <button className="btn" onClick ={this.clearState}>Reset</button>
                    <div className="board-row">
                        <Box value={this.state.boxes[0]} onClick={()=> this.handleBoxClicked(0)} />
                        <Box value={this.state.boxes[1]} onClick={()=> this.handleBoxClicked(1)} />
                        <Box value={this.state.boxes[2]} onClick={()=> this.handleBoxClicked(2)} />
                        <Box value={this.state.boxes[3]} onClick={()=> this.handleBoxClicked(3)} />
                    </div>
                    <div className="board-row">
                        <Box value={this.state.boxes[4]} onClick={()=> this.handleBoxClicked(4)} />
                        <Box value={this.state.boxes[5]} onClick={()=> this.handleBoxClicked(5)} />
                        <Box value={this.state.boxes[6]} onClick={()=> this.handleBoxClicked(6)} />
                        <Box value={this.state.boxes[7]} onClick={()=> this.handleBoxClicked(7)} />
                    </div>
                    <div className="board-row">
                        <Box value={this.state.boxes[8]} onClick={()=> this.handleBoxClicked(8)} />
                        <Box value={this.state.boxes[9]} onClick={()=> this.handleBoxClicked(9)} />
                        <Box value={this.state.boxes[10]} onClick={()=> this.handleBoxClicked(10)} />
                        <Box value={this.state.boxes[11]} onClick={()=> this.handleBoxClicked(11)} />
                    </div>
                    <div className="board-row">
                        <Box value={this.state.boxes[12]} onClick={()=> this.handleBoxClicked(12)} />
                        <Box value={this.state.boxes[13]} onClick={()=> this.handleBoxClicked(13)} />
                        <Box value={this.state.boxes[14]} onClick={()=> this.handleBoxClicked(14)} />
                        <Box value={this.state.boxes[15]} onClick={()=> this.handleBoxClicked(15)} />
                    </div>


                    
               </div>
               <ul className="board-historyList">
                    {this.state.history.length===0 && (<span>No moves to show</span>)}
                    {
                        this.state.history !== 0 &&
                        this.state.history.map((move, index)=>{
                            return(
                                <li>
                                    move {index + 1}: <strong>{move}</strong>
                                </li>
                            )
                        })
                    }
               </ul>
            </div>
        )
       }
    
}
export default Board