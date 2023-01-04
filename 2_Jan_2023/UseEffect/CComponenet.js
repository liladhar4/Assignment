import React from "react";
 class CComponent extends React.Component{
    state={
        massage: "Class Component",
        time :new Date().toString(),
    }; 
    componentDidMount(){
        console.log(" I am from did mount");
        this.interval =setInterval(this.showDate, 1000);
    }
    componentDidUpdate(){
        console.log("i am from update");
    }
    componentWillUnmount(){
        console.log("i am from unmount");
        clearInterval(this.interval);
    }
    showDate=()=>{
        this.setState({time: new Date().toString()});
    };
    render(){
        return(
            <div>
                {this.state.massage}
                <div>{this.state.time}</div>
            </div>
        )
    }
 }
 export default CComponent

