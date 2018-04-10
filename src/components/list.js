import React, { Component } from 'react';
import '../App.css';
function Hello (props) {
    return <h2 className='f12 blue'>hello, i'm {props.name}</h2>
}
class List extends Component {
    render() {
        return (
            <div>
                <Hello name='Bryan' />
                <Hello name='jackson' />
                <Hello name='jardon' />
            </div>
        )
    }
}

export default List;