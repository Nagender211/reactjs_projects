import React, { Component } from 'react'

class LoginLogin extends Component{
    state={isLogin: false}
    handdleLlogin=()=>{
        this.setState((pre)=>{
            return {isLogin: !pre.isLogin}
        })
    }
    render(){
        const {isLogin} = this.state
        let result;
        if(isLogin){
            result = <div><p>Welcome back thank you for the login</p><button onClick={this.handdleLlogin}>Logout</button></div>
        }else{
            result = <div><p>PLease Login</p><button onClick={this.handdleLlogin}>LOGIN</button></div>
        }
        return(
            <div>
                <h1>{result}</h1>
            </div>
        )
    }
}

export default LoginLogin
