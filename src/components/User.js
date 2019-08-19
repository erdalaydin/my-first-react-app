import React, { Component } from 'react'
import LightSwitch from './/LightSwitch'

export default class User extends Component {
  userList = ["Erdal", "Ahmet", "Filiz"]  

  state = { active: true }

  toggle = () => {
    this.setState({
      active: !this.state.active
    })
  }

    
  render() {
    return <div><p>User: <h3>{ this.props.name } is { this.state.active ? '' : 'not ' }present</h3>  </p>
    <button onClick={this.toggle}>Toggle</button> </div>
    
  }
}

