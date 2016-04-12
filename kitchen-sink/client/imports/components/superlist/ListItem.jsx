import React from 'react';

const ListItem = (props) => {
  const { images, index, list } = props;

  if (images) {
    return (
      <div key={index}>
        <img src={index % 2 === 0 ? '/images/Frog.jpg' : '/images/Castle.jpg'} />
      </div>
    );
  }

  return (
    <div key={index}>
      %{list[index]}
    </div>
  );
};

ListItem.propTypes = {
  images: React.PropTypes.bool,
  index: React.PropTypes.number,
  list: React.PropTypes.array,
};

export default ListItem;
