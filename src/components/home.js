import React, { Component } from 'react';
import '../App.css';

const info = {
  author: {
    name: 'NBA',
    id: 'kobe bryant'
  },
  title: 'this is why we play',
  date: '2017',
}
function Author (props) {
  return  <div className='f12 title'>welcome to  <span className="alive">{props.user.name}</span>,your are <span className="alive">{props.user.id}</span></div>
}

function Mes (props) {
    return <div><h2 className='title'><span className="alive">{props.title},{props.date}</span></h2>
      <Author user={props.author} />
    </div>
}



//时间  state
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  } 
  componentWillUnmount () {
    setInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }
  render() {
    return (
      <div className="title" >北京时间：<span className="alive">{this.state.date.toLocaleTimeString()}</span></div>
    )
  }
}


//事件处理
class Btn extends React.Component {
  constructor (props) {
    super(props);
    this.state = { isTrue:true};
    this.click = this.hundleClick.bind(this); 
  }
  hundleClick() {
    this.setState(prevState =>({
      isTrue : !prevState.isTrue
    }));
  }
  render () {
    return( 
     <div className='sure'>
       <button onClick={this.click} >{this.state.isTrue? 'Yes': 'NO'}</button>
     </div>
    )
  }
}



class Home extends Component {
  render() {
    return (
      <div>
        <Mes author={info.author} title={info.title} date={info.date} />
        <Clock/>
        <Btn/>
      </div>
    )
  }
}



export default Home;
