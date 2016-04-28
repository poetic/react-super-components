import React from 'react';

const Header = (props) => (
  <div
    style={{
      alignItems: 'center',
      backgroundColor: 'rgb(241, 241, 241)',
      borderRight: '1px solid #ddd',
      borderBottom: '1px solid #ddd',
      display: 'flex',
      fontSize: '18px',
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

const ShortListItem = (props) => {
  const { index, data } = props;
  const dataItem = data[index];

  return (
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
          marginRight: '20px',
        }}
      >
        S
      </div>
      {
        dataItem.category
        ? `Data Value: ${dataItem.randomNumber}`
        : `Row ${index + 1} -- Data Value: ${dataItem.randomNumber}`
      }
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
};

ShortListItem.propTypes = {
  data: React.PropTypes.array,
  index: React.PropTypes.number,
};

const TallListItem = (props) => {
  const { index, data } = props;
  const dataItem = data[index];

  return (
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
          marginRight: '20px',
        }}
      >
        T
      </div>
      Data Value: {dataItem.randomNumber}
      <br />
      This row is taller
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
};

TallListItem.propTypes = {
  data: React.PropTypes.array,
  index: React.PropTypes.number,
};

export { Header, ShortListItem, TallListItem };
