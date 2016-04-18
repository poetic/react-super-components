import React from 'react';
import { Link } from 'react-router';

export default class Index extends React.Component {
  render () {
    return (
      <ul>
        <li><Link to="image">Image</Link></li>
        <li><Link to="subscriptions">Subscriptions</Link></li>
        <li><Link to="list">List</Link></li>
      </ul>
    )
  }
}
