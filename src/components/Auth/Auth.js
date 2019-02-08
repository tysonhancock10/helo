import React, {Component} from 'react'
import axios from 'axios'
import {updateUser} from './../../ducks/reducer'
import {connect} from 'react-redux'

class Auth extends Component{
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: ''
        }
        this.handleLogin = this.handleLogin.bind(this)
        this.handleRegister = this.handleRegister.bind(this)
    }


    handleRegister (){
        const {username, password} = this.state;
        console.log(this.state)
        axios.post('/auth/register', {username, password})
        .then(res => {
            console.log(res.data)
            this.props.updateUser(res.data)
           this.props.history.push('/dashboard');
        })
        .catch(err => {
            console.log(err)
        })
    }
    handleChange(prop, val) {
        this.setState({
            [prop]: val
        })
    }

    handleLogin(){
        
            const {username, password} = this.state;
            console.log(this.state)
            axios.post('/auth/login', {username, password})
            .then(res => {
                console.log(res.data)
                this.props.updateUser(res.data)
                this.props.history.push('/dashboard')
            })
            .catch(err => {
                console.log(err)
            })
        
    }

    render(){
        
        const {username, password} = this.state;
        return (
            <div>
                <input 
                    value={username}
                    onChange={e => this.handleChange('username', e.target.value)}
                /> 
                <input 
                    type='password'
                    value={password}
                    onChange={e => this.handleChange('password', e.target.value)}
                    />
                <button onClick={this.handleLogin}>Login</button>
                <button onClick={this.handleRegister}>Register</button>
            </div>
        )
    }
}
const mapStateToProps = reduxState => {
    return {
        id: reduxState.id
    }
}

const dispatch = {
    updateUser
}
export default connect(null, dispatch) (Auth)