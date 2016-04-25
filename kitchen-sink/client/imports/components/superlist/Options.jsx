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
                setOptionCallback={props.setListLength}
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
                setOptionCallback={props.setListThreshold}
              />
            </div>
          ))
        }
      </form>
    </div>
  </div>
);

Options.propTypes = {
  setListLength: React.PropTypes.func,
  setListThreshold: React.PropTypes.func,
};

export default Options;
