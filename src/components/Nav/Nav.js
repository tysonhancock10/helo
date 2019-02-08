import React from 'react'
import {withRouter, Link} from 'react-router-dom'
import {connect} from 'react-redux'

const Nav = withRouter( props => {
    console.log(props)
    const username = props.username
    const profile_pic = props.profile_pic
    console.log(username)
    
    // const { router, params, location, routes } = this.props
    return(
           <div >
            {(props.location.pathname === "/") ? '' 
            : 
            <div>
            <Link to='/dashboard'><button>Home</button></Link>
            <Link to='/post:postid'><button>New Post</button></Link>
            <Link to='/'><button>Logout</button></Link> 
            <h2>{username}</h2>
            <img src={profile_pic} alt=''></img>
            </div> 
        }
            
            
        </div>
              
            )
    
    
})

const mapStateToProps = reduxState => {
    return {
        username: reduxState.username,
        profile_pic: reduxState.username
    }
}

export default  withRouter(connect(mapStateToProps)(Nav))