import React from 'react';
import { SuperList } from 'react-super-components';

const list = Array.from(Array(1000).keys());

export const App = () => (
            <div style={{ height: '100vh' }}>
              <SuperList
                className="SuperList"
                rowHeight={ 18 }
                list={ list }
              />
            </div>
    );

// const ImageComponentLoading = () => (
//   <div className="LOADING">Currently Loading...</div>
// );
// 
// const ImageComponentError = () => (
//   <div className="ERROR">There was an error</div>
// );
// 
// export default class App extends React.Component {
//   render() {
//     return (
//       <SuperImage
//         src="http://brentcarnduff.com/wp-content/uploads/2014/08/url-small.jpg"
//         style={{}}
//         loadingComponent={ <ImageComponentLoading /> }
//         errorComponent={ <ImageComponentError /> }
//       />
//     );
//   }
// }
