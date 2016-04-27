# List

## Demo
https://react-super-components.herokuapp.com/list

```
import { List } from 'react-super-components';
import Header from 'exampleImportedHeader.jsx';

// Example ListItem component. Should expect to receive data and index as props.

const ListItem = (props) => {
  const { data, index } = props;
  const dataItem = data[index];
  // when used with multiple list item components:
  // const dataItem = data[index].data;

  return (
    <div>{dataItem} is at row {index}</div>
  );
};

// List with single list item component

const listToBeRendered = [
  'Ray Mysterio',
  'Ric Flair',
];
const itemType = { height: 60, component: ListItem };

<List
  data={ listToBeRendered }
  itemTypes={ itemType }
/>

// List with multiple list item components

const listToBeRenderedWithMultipleTypes = [
  { type: 'listItem', data: 'Macho Man Randy Savage'},
  { type: 'listItem', data: 'Sting'},
  { type: 'header', data: 'Professional Wrestlers'},
];
const itemTypes = [
  { type: 'listItem', height: 60, component: ListItem },
  { type: 'header', height: 20, component: Header },
];

<List
  data={ listToBeRenderedWithMultipleTypes }
  itemTypes={ itemTypes }
/>
```

#### List Prop Types

| Property             | Type            | Required? | Description                                                                                                                                       |
| :---:                | :---:           | :---:     | :---:                                                                                                                                             |
| className            | String          |           | CSS class name                                                                                                                                    |
| data                 | Array           | ✓         | The data you want to use. If multiple `itemTypes` are given, data must be an array of objects with a property `type` that matches a passed `type` in `itemTypes`                                    |
| itemTypes            | Object or Array | ✓         | Either an object or an array of objects with the specified properties listed below                                                                |
| itemTypes.type       | String          | ✓ (when multiple itemTypes)         | Used to match data with its corresponding component when multiple `itemTypes` are given                                                                                                |
| itemTypes.height     | Number          | ✓         | Specifies the height of the rendered React component                                                                                              |
| itemTypes.component  | Function        | ✓         | Specifies the React component that will be rendered                                                                                               |
| thresholdRows        | Number          |           | Number of rows to render above/below the visible bounds of the list. This can help reduce flickering during scrolling on certain browers/devices  |
