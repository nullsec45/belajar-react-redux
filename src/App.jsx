import React, { Component } from 'react'
import { NavbarComponent, SliderComponent } from './components'


export default class App extends Component {
  render() {
    return (
      <div>
        <NavbarComponent />
        <SliderComponent className="mt-3" />
      </div>
    )
  }
}
