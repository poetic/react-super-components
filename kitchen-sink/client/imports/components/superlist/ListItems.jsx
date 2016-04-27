import React from 'react';

const Header = (props) => (
  <div
    style={{
      alignItems: 'center',
      backgroundColor: 'rgb(221, 221, 221)',
      borderBottom: '1px solid #ddd',
      display: 'flex',
      justifyContent: 'center',
      height: '50px',
      padding: '0 25px',
    }}
  >
    { props.data[props.index].title }
    <span
      style={{
        flex: 1,
        textAlign: 'right',
        color: '#bdbdbd',
        fontSize: '.75em',
        fontWeight: '100',
      }}
    >
      50px
    </span>
  </div>
);

Header.propTypes = {
  data: React.PropTypes.array,
  index: React.PropTypes.number,
};

const ShortListItem = (props) => (
  <div
    style={{
      height: '50px',
      borderBottom: '1px solid #ddd',
      display: 'flex',
      padding: '0 25px',
      alignItems: 'center',
    }}
  >
    <div
      style={{
        backgroundColor: '#9B59B6',
        display: 'inline-block',
        height: '40px',
        width: '40px',
        lineHeight: '40px',
        textAlign: 'center',
        borderRadius: '40px',
        color: '#fff',
        fontSize: '1.5em',
        marginRight: '25px',
      }}
    >
      S
    </div>
    This is row {props.index + 1}
    <span
      style={{
        flex: 1,
        textAlign: 'right',
        color: '#bdbdbd',
        fontSize: '.75em',
        fontWeight: '100',
      }}
    >
      50px
    </span>
  </div>
);

ShortListItem.propTypes = {
  data: React.PropTypes.array,
  index: React.PropTypes.number,
};

const TallListItem = (props) => (
  <div
    style={{
      height: '100px',
      borderBottom: '1px solid #ddd',
      display: 'flex',
      padding: '0 25px',
      alignItems: 'center',
    }}
  >
    <div
      style={{
        backgroundColor: '#34495E',
        display: 'inline-block',
        height: '40px',
        width: '40px',
        lineHeight: '40px',
        textAlign: 'center',
        borderRadius: '40px',
        color: '#fff',
        fontSize: '1.5em',
        marginRight: '25px',
      }}
    >
      T
    </div>
    This is row {props.index + 1}
    <br />
    It is is taller
    <span
      style={{
        flex: 1,
        textAlign: 'right',
        color: '#bdbdbd',
        fontSize: '.75em',
        fontWeight: '100',
      }}
    >
      100px
    </span>
  </div>
);

TallListItem.propTypes = {
  data: React.PropTypes.array,
  index: React.PropTypes.number,
};

export { Header, ShortListItem, TallListItem };
