import React from 'react';
import "./login.css";
import {Link} from 'react-router-dom';


export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            account: 123,
            password: "abc",
            verifyCode: "111"
        }
    }

    render() {
        return (
            < form align='center'>
                <Text title="账号"/>
                <Text title="密码"/>
                <Text title="验证码"/>
                <button><Link to="/homePage">登录</Link></button>
            </form >
        );
    }
}


function Text(props) {
    return (
        <div className="p">
            <div>{props.title}</div>
            <input type="text" />
        </div>
    );
}