import React from 'react';
import RadioButton from './RadioButton';

const listLengthOptions = ['100', '1000', '5000', '10000'];
const listThresholdOptions = ['100', '500', '1000', '2000', '5000'];

class Options extends React.Component {
  constructor() {
    super();
    this.state = {
      list: 'single',
    };
  }

  changeDisplayedList() {
    const selectDropdownValue = document.getElementById('listSelect').value;

    this.setState({ list: selectDropdownValue });
    this.props.changeDisplayedList(selectDropdownValue);
  }

  renderAdditionalOptionsBasedOnList() {
    const { setGroupData } = this.props;
    const currentList = this.state.list;

    if (currentList === 'multiple') {
      return (
        <div style={{ marginBottom: '10px' }}>
          <button onClick={() => setGroupData()}>
            Group Multiple Components List Data By Height
          </button>
        </div>
      );
    }

    return null;
  }

  render() {
    const { setListLength, setListThreshold, setSortData } = this.props;

    return (
      <div>
        <div style={{ marginBottom: '10px' }}>
          Number Of Items In List
          <form>
            {
              listLengthOptions.map((option) => (
                <div key={option}>
                  <RadioButton
                    value={option}
                    setOptionCallback={setListLength}
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
                    setOptionCallback={setListThreshold}
                  />
                </div>
              ))
            }
          </form>
        </div>
        <select
          onChange={() => this.changeDisplayedList()}
          id="listSelect"
          name="List"
          style={{ marginBottom: '10px' }}
        >
          <option value="single">Single Component List</option>
          <option value="multiple">Multiple Components List</option>
        </select>
        <div style={{ marginBottom: '10px' }}>
          <button onClick={() => setSortData()}>
            Sort List By Data Value
          </button>
        </div>
        { this.renderAdditionalOptionsBasedOnList() }
      </div>
    );
  }
}

Options.propTypes = {
  changeDisplayedList: React.PropTypes.func,
  setGroupData: React.PropTypes.func,
  setListLength: React.PropTypes.func,
  setListThreshold: React.PropTypes.func,
  setSortData: React.PropTypes.func,
};

export default Options;
