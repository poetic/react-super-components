import React from 'react';
import RadioButton from './RadioButton';

const listLengthOptions = ['100', '1000', '5000', '10000'];
const listThresholdOptions = ['100', '500', '1000', '2000', '5000'];

const Options = (props) => (
  <div>
    <div style={{ marginBottom: '10px' }}>
      Number Of Items In List
      <form>
        {
          listLengthOptions.map((option) => (
            <div key={option}>
              <RadioButton
                value={option}
                setOptionCallback={props.changeListLength}
              />
            </div>
          ))
        }
      </form>
    </div>
    <div style={{ marginBottom: '10px' }}>
      Pixel Threshold For Loading Above And Below
      <form>
        {
          listThresholdOptions.map((option) => (
            <div key={option}>
              <RadioButton
                value={option}
                setOptionCallback={props.changeListThreshold}
              />
            </div>
          ))
        }
      </form>
    </div>
    <div>
      <button
        style={{ marginBottom: '10px' }}
        onClick={() => {
          props.addImages();
        }}
      >
        Add Images
      </button>
    </div>
  </div>
);

Options.propTypes = {
  addImages: React.PropTypes.func,
  changeListLength: React.PropTypes.func,
  changeListThreshold: React.PropTypes.func,
};

export default Options;
