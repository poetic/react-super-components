# react super components

## API

### SuperImage

```
import { SuperImage, SuperSubscriptions } from 'react-super-components';

const image = <Image
  src="http://brentcarnduff.com/wp-content/uploads/2014/08/url-small.jpg" />

const subscriptions = <Subscriptions
  subscriptions={[Meteor.subscribe('users')]} />
```

### SuperList

```
import {SuperList} from 'react-super-components';

const list = ['item1', 'item2', 'item3', ...];

<SuperList
  rowHeight={50}
  list={ list }
/>

```

SuperList defaults to rendering `<div>{list[index]}</div>` but it can also iterate over a given listItem component or use a rowRenderer
function to determine what to render in each row.

#### SuperList Prop Types

| Property | Type | Required? | Description |
|:---|:---|:---:|:---|
| className | String |  | CSS class name |
| list | Array | ✓ | The list you want to use. |
| rowHeight | Number or Function | ✓ | Either a fixed row height (number) or a function that returns the height of a row given its index: `(index: number) => number` |
| rowRenderer | Function |  | Responsbile for rendering a row given an index. Should look like `(index: number, list: array) => React.PropTypes.node` |
| thresholdRows | Number |  | Number of rows to render above/below the visible bounds of the list. This can help reduce flickering during scrolling on certain browers/devices. |


## Testing
```
run kitchen-sink
meteor run
// another shell
npm run watch
```
