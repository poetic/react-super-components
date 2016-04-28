import React from 'react';
import { Link } from 'param-store';

export default class Index extends React.Component {
  render() {
    return (
      <ul>
        <li><Link params={{path: 'image'}}>Image</Link></li>
        <li><Link params={{path: 'subscription'}}>Subscription</Link></li>
        <li><Link params={{path: 'list'}}>List</Link></li>
        <li><Link params={{path: 'stack'}}>Stack</Link></li>
      </ul>
    );
  }
}
