import '../App.css';
import React,{Component} from 'react';
// class Square extends React.Component {
//   constructor(props) {
//     /*你必须调用 super(); 方法才能在继承父类的子类中正确获取到类型的 this*/
//     super();
//     this.state = {
//       value : null,
//     }
//   }
//   render() {
//     return (
//       <button className="square" onClick={()=>this.props.onClick()}>
//         {this.props.value}
//       </button>
//     );
//   }
// }

function Square (props) {
  return (
    <button className="square" onClick={()=> props.onClick()}>
      {props.value}
    </button>
  )
}


class Board extends React.Component {
  /*constructor() {
    super();
    this.state = {
      squares: Array(9).fill(null),
      xIsNext:true,
    }
  }*/
  // hundleClick(i) {
  //   /*为什么不可变性在React当中非常重要*/
  //   const squares = this.state.squares.slice();
  //   if (calculateWinner(squares) || squares[i]) {
  //     return;
  //   }
  //   squares[i] = this.state.xIsNext ? 'X' : 'O';
  //   this.setState({
  //     squares:squares,
  //     xIsNext:!this.state.xIsNext,
  //   });     
  // }
  renderSquare(i) {
    // return <Square value={i} />;

    /*注意到我们在写代码的时候，在各个属性直接换了行，这样可以改善我们代码的可读性。
    并且我们在 JSX 元素的最外层套上了一小括号，以防止 JavaScript 代码在解析时自动在换行处添加分号。*/
    return (
      <Square 
      value={this.props.squares[i]} 
      onClick={()=>this.props.onClick(i)} 
      />
    );
  }
  render() {
    return (
       <div>
        {/*<div className="status">{status}</div>*/}
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
        

class Game extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      xIsNext: true,
    };
  }
  hundleClick(i) {
    const history = this.state.history;
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
       history: history.concat([{
        squares: squares
      }]),
      xIsNext:!this.state.xIsNext,
    });     
  }
  render() {
    const history = this.state.history;
    const current = history[history.length - 1];
    const winner = calculateWinner(current.squares);

    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
          squares={current.squares}
          onClick={(i) => this.hundleClick(i)}
        />
        </div>
        <div className="game-info">
          <div>{ status}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}


function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}



export default Game;

// ========================================
// ReactDOM.render(
//   <Game />,
//   document.getElementById('root')
// );
