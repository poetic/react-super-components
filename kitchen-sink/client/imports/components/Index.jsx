import React from 'react';
import ParamStore from 'param-store';

export default class Index extends React.Component {
  render() {
    return (
      <ul>
        <li onClick={() => {ParamStore.set({path: 'image'})}}>Image</li>
        <li onClick={() => {ParamStore.set({path: 'subscription'})}}>Subscriptions</li>
        <li onClick={() => {ParamStore.set({path: 'list'})}}>List</li>
        <li onClick={() => {ParamStore.set({path: 'stack'})}}>Stack</li>
      </ul>
    );
  }
}
