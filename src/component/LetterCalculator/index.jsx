import {Component} from 'react'
import './index.css'

class LetterCalculator extends Component {
  state = {
    typeInput: '',
  }

  onChangeInput = event => {
    this.setState({
      typeInput: event.target.value,
    })
  }

  render() {
    const {typeInput} = this.state
    const resultCount = typeInput.length

    return (
      <div className="lettercalculator-container">
        <div className="letter-inputs">
          <h1>Calculate the Letters you enter</h1>
          <label htmlFor="phraseInput">Enter the phrase</label>
          <input
            id="phraseInput"
            type="text"
            className="input"
            value={typeInput}
            onChange={this.onChangeInput}
          />
          <button className="button" type="button">
            {typeInput !== '0' && <p>No.of letters: {resultCount}</p>}
          </button>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          className="image"
          alt="letters Calculator"
        />
      </div>
    )
  }
}

export default LetterCalculator