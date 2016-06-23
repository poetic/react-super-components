# React Super Components

[![npm][npm-image]][npm-url]
[![semantic-release][semantic-release-image]][semantic-release-url]

[travis-image]:            https://travis-ci.org/poetic/react-super-components.svg
[travis-url]:              https://travis-ci.org/poetic/react-super-components
[npm-image]: https://img.shields.io/npm/v/react-super-components.svg
[npm-url]: https://npmjs.org/package/react-super-components
[semantic-release-image]:  https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-release-url]:    https://github.com/semantic-release/semantic-release

Super Components are a set of React components that are data-aware and follow native design patterns for optimal performance.

## Data Aware
Unlike most other frameworks, Meteor is full-stack and isomorphic. This opens the door for data-aware components that can subscribe to data when they need it.

## Performant
One of the main reasons native apps are more performant out of the box is that they follow better design patterns. These patterns include list views that recycle items and view controllers that take care of loading and unloading views in an efficient manner. We can achieve similar performance in web apps if we follow the same patterns.

## Demo
https://react-super-components.herokuapp.com/

## API

[Stack](docs/stack.md)

[Subscriptions](docs/subscriptions.md)

[Image](docs/image.md)

[List](docs/list.md)

## Testing
```
cd kitchen-sink
meteor npm install
meteor run
```
