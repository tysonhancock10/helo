import React, {Component} from 'react'

class Dashboard extends Component{
    constructor(){
        super()
        this.state = {
            posts: [],
            search: '',
            userposter: true
        }
    }

    render(){
        this.state.posts.map((elem) => { return(
            <div>
            <p>posts.title</p>
            <p>author.username</p>
            <p>author.profile_pic</p>
            </div>
        )
        })
        return (
            <div>
                <input></input>
                <button>Search</button>
                <button>Reset</button>
                <button></button>
                Dashboard
            </div>
        )
    }
}
export default Dashboard