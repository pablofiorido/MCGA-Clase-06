import './style.css';
import React from 'react';
//import { ReactComponent } from '*.svg';

/*
function Circle(props) {
    return (
        <button className="circle" onClick={props.onClick}>
            {props.value}
        </button>
    );
}


const Circle = props => {
    return (
        <button className="circle" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

*/

class Circle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: false
        }
    }

    clicked = () => {
        alert('hola')
        this.setState(
            {
                isChecked: true
            }
        )
    }


    render() {
        return (
            <button className="circle" onClick={this.clicked}>
                {this.state.isChecked}
            </button>
        );
    }
}

const Board = props => {
    return (
        <div className="board">
            <div className="row">
                <Circle />
                <Circle />
                <Circle />
                <Circle />
                <Circle />
                <Circle />
            </div>
            <div className="row">
                <Circle />
                <Circle />
                <Circle />
                <Circle />
                <Circle />
                <Circle />
            </div>
            <div className="row">
                <Circle />
                <Circle />
                <Circle />
                <Circle />
                <Circle />
                <Circle />
            </div>
            <div className="row">
                <Circle />
                <Circle />
                <Circle />
                <Circle />
                <Circle />
                <Circle />
            </div>
            <div className="row">
                <Circle />
                <Circle />
                <Circle />
                <Circle />
                <Circle />
                <Circle />
            </div>
            <div className="row">
                <Circle />
                <Circle />
                <Circle />
                <Circle />
                <Circle />
                <Circle />
            </div>
        </div>
    )
}


export default Board;
