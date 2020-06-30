import React from 'react';
import Stars from './Stars'
import Icon from './Icon'
import './StarsCounter.css'

class StarsCounter extends React.Component {
  state = {
    amount: this.props.amount,
  }

  plus = () => this.setState({
    amount: +this.state.amount + 1,
  })

  componentWillReceiveProps = (newProps) => this.setState({
    amount: newProps.amount,
  });

  render = () => (
    <div className="StarsCounter">
      <button className="StarsCounter__Button" onClick={() => this.plus()}>
        <Icon className="StarsCounter__Button-Icon" name="plus"/>
        <span>Добавить звезду!</span>
      </button>
      <Stars amount={this.state.amount} />
    </div>
  )
}

export default StarsCounter