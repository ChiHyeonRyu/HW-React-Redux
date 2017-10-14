import * as actions from '../actions';
import NumButton from './NumButton';
import PlusButton from './PlusButton';
import MinusButton from './MinusButton';
import ClearButton from './ClearButton';
import AllclearButton from './AllclearButton';
import Result from './Result';
import './Calculator.css'

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class CalculatorCP extends Component {
  render() {
    const { calculator, actions } = this.props;
    return (
      <div>
      <Result result={calculator.showingResult ? calculator.resultValue : calculator.inputValue} />
        <div>
          <NumButton n={1} onClick={() => actions.onNumClick(1)} />
          <NumButton n={2} onClick={() => actions.onNumClick(2)} />
          <NumButton n={3} onClick={() => actions.onNumClick(3)} />
          <PlusButton onClick={actions.onPlusClick} />
        </div>
        <div>
          <NumButton n={4} onClick={() => actions.onNumClick(4)} />
          <NumButton n={5} onClick={() => actions.onNumClick(5)} />
          <NumButton n={6} onClick={() => actions.onNumClick(6)} />
          <MinusButton onClick={actions.onMinusClick} />
        </div>
        <div>
          <NumButton n={7} onClick={() => actions.onNumClick(7)} />
          <NumButton n={8} onClick={() => actions.onNumClick(8)} />
          <NumButton n={9} onClick={() => actions.onNumClick(9)} />
          <NumButton n={0} onClick={() => actions.onNumClick(0)} />
        </div>
        <div>
          <AllclearButton onClick={actions.onAllclearClick} />
          <ClearButton onClick={actions.onClearClick} />
        </div>
      </div>
    );
  }
}

const mapState = (state, ownProps) => ({
  calculator: state.calculator,
});

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  }
}

export default connect(mapState, mapDispatch)(CalculatorCP);
