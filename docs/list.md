# List

## Demo
https://react-super-components.herokuapp.com/list

## API

Super List renders the components that you pass it in `itemTypes`. Each
component should expect to receive `index` and `data` as props.

Example:

```
const ListItem = (props) => {
  const { data, index } = props;
  // Now with data and index you can access the dataItem at each index
  const dataItem = data[index];

  return (
    <div>{dataItem} is at row {index}</div>
  );
};
```

### Single Item Component

A list that has only one type of component to render for the given data.

```
import { List } from 'react-super-components';
import { ListItem } from 'ExampleImportedListItem.jsx';

const listToBeRendered = [
  'Ray Mysterio',
  'Ric Flair',
];
const itemType = { height: 60, component: ListItem };

<List
  data={ listToBeRendered }
  itemTypes={ itemType }
/>
```

### Multiple Item Components

A list that has multiple components to render for the given data. When using
multiple components it's essential that the given data has a `type` property that
matches a passed in `type` in the `itemTypes` prop.

```
import { List } from 'react-super-components';
import { ShortListItem, ListItem } from 'ExampleImportedListItems.jsx';

const listToBeRenderedWithMultipleTypes = [
  { type: 'regular', data: 'Macho Man Randy Savage'},
  { type: 'regular', data: 'Sting'},
  { type: 'short', data: 'The Giant'},
  { type: 'short', data: 'The Big Show'},
];
const itemTypes = [
  { type: 'regular', height: 60, component: ListItem },
  { type: 'short', height: 40, component: ShortListItem },
];

<List
  data={ listToBeRenderedWithMultipleTypes }
  itemTypes={ itemTypes }
/>
```

### Multiple Item Components and groupBy prop

A list with multiple components that also needs to group the given data a certain way.
The `groupBy` prop must be given either a string that specifies which property to group
the given data by or a function that expects dataItem and returns how the data should
be grouped. Just like with the Multiple Item Components example, when using multiple
components it's essential that the given data has a `type` property that matches a
passed in `type` in the `itemTypes` prop.

`groupBy` uses lodash's groupBy: https://lodash.com/docs#groupBy

```
import { List } from 'react-super-components';
import { ShortListItem, ListItem, Header } from 'ExampleImportedListItems.jsx';

const listToBeRenderedWithMultipleTypes = [
  { type: regular, wrestlerCategory: 'Classic Wrestlers', data: 'Lex Luger'},
  { type: regular, wrestlerCategory: 'Classic Wrestlers', data: 'Bret Hart'},
  { type: short, wrestlerCategory: 'New Wrestlers', data: 'Dolph Ziggler'},
  { type: short, wrestlerCategory: 'New Wrestlers', data: 'Roman Reigns'},
];
const itemTypes = [
  { type: 'regular', height: 60, component: ListItem },
  { type: 'short', height: 40, component: ShortListItem },
  { type: 'header', height: 30, component: Header },
];

// groupBy as a function:
const groupByWithFunction = (dataItem) => {
  if (dataItem.wrestlerCategory === 'New Wrestlers') {
    return 'Wrestlers I Am Too Old For';
  }

  return 'Ring Legends';
}

// This function will group your data by the wrestlerCategory property with
// the headers 'Ring Legends' and 'Wrestlers I Am Too Old For'

// groupBy as a string:
const groupByWithString = 'wrestlerCategory';

// This will also group your wrestlers by the wrestlerCategory but the headers will
// be the value of wrestlerCategory: 'Classic Wrestlers' and 'New Wrestlers'

<List
  data={ listToBeRenderedWithMultipleTypes }
  groupBy={ groubByWithString }
  itemTypes={ itemTypes }
/>
```
#### List Prop Types

| Property             | Type               | Required?                   | Description                                                                                                                                       |
| :---:                | :---:              | :---:                       | :---:                                                                                                                                             |
| className            | String             |                             | CSS class name                                                                                                                                    |
| data                 | Array              | ✓                           | The data you want to use. If multiple `itemTypes` are given, data must be an array of objects with a property `type` that matches a passed `type` in `itemTypes`                                    |
| groupBy              | Function or String |                             | Either a string that specifies which property to group the given `data` by or a function that expects dataItem and returns how the `data` should be grouped      |
| itemTypes            | Object or Array    | ✓                           | Either an object or an array of objects with the specified properties listed below                                                                |
| itemTypes.type       | String             | ✓ (when multiple itemTypes) | Used to match data with its corresponding component when multiple `itemTypes` are given                                                                                                |
| itemTypes.height     | Number             | ✓                           | Specifies the height of the rendered React component                                                                                              |
| itemTypes.component  | Function           | ✓                           | Specifies the React component that will be rendered                                                                                               |
| thresholdRows        | Number             |                             | Number of rows to render above/below the visible bounds of the list. This can help reduce flickering during scrolling on certain browers/devices  |
