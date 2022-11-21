import React, { Component } from 'react'
import axios from 'axios'
import UserDetails from './UserDetails'

export default class UserList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }


    // Lifecycle method
    componentDidMount = () => {

        this.getUserData()
    }
  
    getUserData = () => {

        const USER_URL = 'https://jsonplaceholder.typicode.com/users'
        
        axios.get(USER_URL)
            
            .then(res => {

                console.log(res.data)
                this.setState({...this.state, users: res.data})

            })

            .catch(error => {

                console.log(error)
            })
    }
    render() {
    return (
    
    <>
        <h2>User List</h2>

        {
            this.state.users.map(u => 
                <UserDetails key={u.id} user= {u} />
                
                )
        }
    </>
    
    
    )
  }
}
