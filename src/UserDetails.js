import React, { Component } from 'react'

export default class UserDetails extends Component {
  render() {
    const user = this.props.user
    
    return (
      
      <>
        <p>
            <img height='100' width='100' src={`https://robohash.org/${user.id}?set=set2`} alt='robot' />
        </p>
        <p>{user.name} - {user.email}</p>
            
        <p>{user.username}</p>
         
        <p>{user.address.suite}, {user.address.street}, {user.address.city}</p>
      </>
            
            
   
    )
  }
}
