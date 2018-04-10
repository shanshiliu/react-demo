import React,{Component} from 'react';
import '../App.css';


/**/
function Left() {
    return (
        <div>left</div>
    )
}
function Right() {
    return (
        <div>right</div>
    )
}
function SplitBox(props) {
    return (
        <div className='box'>
            <div className='box-left'>{props.left}</div>
            <div className='box-right'>{props.right}</div>
        </div>
    )
}
function Container() {
    return (
        <div>
            <SplitBox left={<Left/>} right={<Right/>} />
        </div>
    )
}


/*双向绑定*/
class  Searchbar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {words:'search',choice:false};
        this.hundleChange = this.hundleChange.bind(this);
        this.hundlechoice = this.hundlechoice.bind(this);
    }
    hundleChange(e) {
        this.setState({words:e.target.value})
    }
    hundlechoice() {
        this.setState((p)=>({
            choice: !p.choice
        }))
    }
    render() {
        return (
            <div className='searchbar'>
            <input type='text' value={this.state.words}  onChange={this.hundleChange} />
            <span>{this.state.words}</span>
            <br/>
            <input type="checkbox" vlaue='basketball' checked={this.state.choice} onChange={this.hundlechoice} />
            {this.state.choice? '已选择你喜欢的篮球':'点击喜欢篮球'}
            </div>
        )
    }
    
}


function Title(props) {
    return <div>{props.head}</div>
}
function Body(props) {
    return <div>{props.name} &nbsp;&nbsp;&nbsp;&nbsp;  {props.price} </div>
}
function Menu(props) {
    return (
        <div>
            <h5>Name   &nbsp;&nbsp;&nbsp;&nbsp;  Price</h5>
            <div className='weight7'>{props.title}</div>
            <div >{props.body}</div>
        </div>
    )
}
function MenuS(props) {
    return (
        <Menu  title={ <Title head={props.head} /> }  
               body={ <Body name={props.name} price={props.price}  />}
         />
    )
}
function Html() {
    return <div className='menu'>
        <MenuS head='球类运动' name='篮球' price='$3333'  />
        <MenuS head='沙滩运动' name='足球' price='$4433'  />
        <MenuS head='海上运动' name='拍球' price='$3323'  />
    </div>
}


//ref 的使用  不能再函数是组件上使用
class Focus extends React.Component {
    constructor (props) {
        super(props);
        this.focus = this.focus.bind(this)
    }
    focus () {
        this.inputText.focus();
    }
    render () {
        return (
            <div>
                <input type="text" ref={(input)=>{ this.inputText = input }} />
                <button onFocus={this.focus} >选中焦点</button>
            </div>
        )
    }

}
class TextFocus extends React.Component {
    componentDidMount() {
        this.textInput.focus();
    }
    render() {
        return (
            <Focus ref={(input)=>{this.textInput=input}} />
        )
    }

}


function Child() {
    return (
        <div>
            <Container />
            <Searchbar />
            <Html />
        </div>
    )    
}


export default Child;
