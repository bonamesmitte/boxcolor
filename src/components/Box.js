import React, { Component } from 'react';


class Box extends Component {

    state = {
    color: "blue",
    color: "orange"

    }

    handleClick = (e) => {
        this.setState({
        color: e.target.color
        })
    }

    changeColor(){
        if(this.state.color === "blue"){
            this.setState({color:"orange"})
        }
        else if(this.state.color === "orange"){
            this.setState({color:"blue"})
        }
    }
 
    render() {
        return (
            <div className="container">
                <div id="box1" onClick={this.changeColor} color={this.state.color}>Click here</div>
                <h1 id="letter1">BEFORE</h1>

                <div id="box2">Click here</div>
                <h1 id="letter2">AFTER</h1>         
            </div>
        );
    }
}

export default Box;

