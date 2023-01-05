import React from "react";

const Box = ({value, onClick})=>{
    return(
        <button className="board_box"
        onClick={onClick}>
            {value}
        </button>
    )
}
export default Box