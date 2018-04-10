import React,{Component} from 'react';
import '../App.css';

//状态提升  example 温度转换器
const unit = {
    c : '摄氏度(℃)',
    f : '华氏度(℉)',
}

//转换函数
function changeC(num) {
    return (num - 32) * 5 / 9;
}
function changeF(num) {
    return (num * 9 / 5) + 32;
}
//是否超过100度
// function hundred(props) {
//     if 
// }

//child component
class Tem extends React.Component {
    constructor (props) {
        super(props);
        this.hundleChange = this.hundleChange.bind(this);
    }
    hundleChange(e) {
        this.props.onChangeTem(e.target.value);
    }
    render() {
        const type = this.props.type;
        const num = this.props.num;
        return (
            <div>
            <span>请输入{type=='c'? '摄氏度':'华氏度' }</span>
            <input type="text" onChange={this.hundleChange} />
            </div>
        )
    }
}

//father component
class TemFather extends React.Component {
    constructor(props) {
        super(props)
        this.toF = this.toF.bind(this);
        this.toC = this.toC.bind(this);
        this.state = {type:'c',num:''}
    }
    toF(num) {
        this.setState({type:'c',num});
    }
    toC(num) {
        this.setState({type:'f',num});
    }
    render () {
        const type = this.state.type;

        return (
            <div>    
                <Tem type='c'  onChangeTem={this.toF} />
                <Tem type='f'   onChangeTem={this.toC} />
            </div>
        )
    }
}

export default TemFather;
