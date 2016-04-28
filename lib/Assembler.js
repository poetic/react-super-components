import React from 'react'

export default class Assembler extends React.Component {
  render () {
    return (
      <div>{this.props.children}</div>
    )
  }
}
