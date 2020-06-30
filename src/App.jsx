import React from 'react';
import moment from 'moment'
import { MuiThemeProvider, DatePicker } from 'material-ui'
import StarsCounter from './components/StarsCounter'
import IconsSprite from './components/IconsSprite'
import './App.css'

const dateDayFormat = 'DD';

class App extends React.Component {
  state = {
    day: 5,
  }

  setDay = (n, date) => this.setState({
    day: +moment(date).format(dateDayFormat),
  })

  render = () => (
    <MuiThemeProvider>
      <div className="App">
        <a className="App__Task" href="https://kodaktor.ru/frmw_007">FRMW-007</a>
        <h2 className="App__Name">Счетчик звезд на React</h2>
        <h3 className="App__Author">Кочетыгов Андрей</h3>
        <IconsSprite/>
        <DatePicker
          className="App__DataPicker"
          onChange={this.setDay}
          floatingLabelText="Выберите дату!"
        />
        <StarsCounter amount={this.state.day}/>
      </div>
    </MuiThemeProvider>
  )
}

export default App;
