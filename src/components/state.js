import React,{Component} from 'react';
import '../App.css';



//example 1 
// function LoginIn(props) {
//     return (
//         <div>
//         这里是登录页面    
//         <button>点击登录</button>
//         </div>
//     )
// }
// function LoginOut(props) {
//     return (
//         <div>
//         这里是退出页面    
//         <button>退出</button>
//         </div>
//     )
// }

// function State(props) {
//     if(props.login) {
//         return (
//             <LoginOut/>
//         )
//     } else {
//         return (
//             <LoginIn/>
//         )
//     }
    
// }


//example 2 条件渲染
class State extends React.Component {
    constructor (props) {
        super(props);
        this.state = {islogin: false};
        this.hundleLoginIn = this.hundleLoginIn.bind(this);
        this.hundleLoginOut = this.hundleLoginOut.bind(this);
    }
    hundleLoginIn () {
        this.setState({islogin:true})
    } 
    hundleLoginOut () {
        this.setState({islogin:false})
    }
    render(props) {
        let login = this.state.islogin;
        let div = null;
        if(!login) {
            div = <div>welcome here，<button onClick={this.hundleLoginIn}>点击登录</button></div>
        } else {
            div = <div>if you to leave，<button onClick={this.hundleLoginOut}>退出</button></div>
        }

        return (
            <div>
                {div}
                <Warn/>
            </div>
        )
    }

}

//example 3 阻止渲染
function WarningBanner(props) {
    if(!props.warn) {
        return null;
    }
    return (
        <div className='warn' >warning</div>
    )
}

function List() {
    const names = ['高圆圆','李智恩','郑秀晶','宋慧乔'];
    const listItems =  names.map((names,index)=>
     <li key={index}  >{names}</li>
    )
    return (
        <div className='clearfix'><ul className='ul' >{listItems}</ul></div>
    )
}


function Lis(props) {
    return <li>{props.value}</li>
}
function Items() {
   const names = ['彭于晏','林更新','吴亦凡','蒋劲夫'];
   return  <div className='clearfix'><ul className='ul' >
       {names.map((names,index)=>
       <Lis key={index} value={names} />
       )}
   </ul></div>
}

class Warn extends React.Component{
    constructor (props) {
        super(props);
        this.state = {isWarning:true}
        this.hundleClick = this.hundleClick.bind(this);
    }
    hundleClick() {
        this.setState(prevstate=>({
            isWarning: !prevstate.isWarning
        }))
    }
    render() {
        return (
            <div >
                <WarningBanner warn={this.state.isWarning} />
                <button className='button' onClick={this.hundleClick} >{this.state.isWarning? 'hide': 'show'}</button>
                <List />
                <Items />
                <Form />
            </div>
        )
    }
}


//表单
class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text:'请输入语句'};
        this.hundleChange = this.hundleChange.bind(this);
        this.hundleSubmit = this.hundleSubmit.bind(this);
    }
    hundleChange (e) {
        this.setState({text:e.target.value});
    }
    hundleSubmit (e) {
        alert(this.state.text);
        //阻止浏览器默认行为。非IE
        e.preventDefault();
    }
    render () {
        return (
            <div>
            <form onSubmit={this.hundleSubmit} >
                <label>
                   <input type="text" value={this.state.text} onChange={this.hundleChange} />
                </label>
                <div>{this.state.text}</div>
                <input type="submit" value='发送文本' />
            </form>
            </div>
        )
    }
}

export default State;
 