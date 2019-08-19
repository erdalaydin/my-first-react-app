import React, { Component } from 'react'
import User from './User'
import LightSwitch from './LightSwitch'

export default class UserBoard extends Component {
  render() {
     return <div><User name="Erdal"/> 
                 <User name="Şölen"/>
                 <User name="Filiz"/>
     </div>
    
    
  }
}

