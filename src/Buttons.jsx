import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import './ButtonsStyle.css'

class Buttons extends React.Component {
  /* const Button = ({onClick, text}) => {
        const style ={
            color:'#black'
        }
        return <button onClick={onClick} style={style}> {text}</button>
    } */

  click(num) {
    const { click } = this.props
    return click.bind(this, num)
  }

  clickOperation(num) {
    const { clickOperation } = this.props
    return clickOperation.bind(this, num)
  }

  render() {
    const bodyStyle = {
      display: 'grid',
      gridTemplateColumns: '125px 125px 125px 125px 125px',
      gridTemplateRows: '110px 110px 110px 110px 110px',
    }
    return (
      <div style={bodyStyle}>
        <Button id="button7" text="7" color="#A5DAE5" div className="numeros" click={this.click('7')} />
        <Button id="button8" text="8" color="#A5DAE5" div className="numeros" click={this.click('8')} />
        <Button id="button9" text="9" color="#A5DAE5" div className="numeros" click={this.click('9')} />
        <Button id="buttonpn" text="+/-" color="#C0C3C4" className="gray" click={this.clickOperation('+/-')} />
        <Button id="buttonrow" text="←" color="#C0C3C4" className="gray" click={this.clickOperation('<-')} />
        <Button id="button4" text="4" color="#A5DAE5" div className="numeros" click={this.click('4')} />
        <Button id="button5" text="5" color="#A5DAE5" div className="numeros" click={this.click('5')} />
        <Button id="button6" text="6" color="#A5DAE5" div className="numeros" click={this.click('6')} />
        <Button id="buttonx" text="x" color="#B5B9BA" div className="gray" click={this.clickOperation('*')} />
        <Button id="buttond" text="÷" color="#B5B9BA" div className="gray" click={this.clickOperation('/')} />
        <Button id="button1" text="1" color="#A5DAE5" div className="numeros" click={this.click('1')} />
        <Button id="button2" text="2" color="#A5DAE5" div className="numeros" click={this.click('2')} />
        <Button id="button3" text="3" color="#A5DAE5" div className="numeros" click={this.click('3')} />
        <Button id="buttonr" text="-" color="#B5B9BA" div className="gray" click={this.clickOperation('-')} />
        <Button id="buttonp" text="+" color="#B5B9BA" divclassName="gray" click={this.clickOperation('+')} />
        <Button id="buttonc" text="C" color="#FAAEAE" div className="del" click={this.clickOperation('C')} />
        <Button id="button0" text="0" color="#A5DAE5" div className="numeros" click={this.click('0')} />
        <Button id="button." text="." color="#A5DAE5" div className="numeros" click={this.click('.')} />
        <Button id="buttonce" text="CE" color="#FAAEAE" div className="del" click={this.clickOperation('CE')} />
        <Button id="buttone" text="=" color="#81C3CC" div className="equal" click={this.clickOperation('=')} />
      </div>
    )
  }
}

Buttons.propTypes = {
  click: PropTypes.func.isRequired,
  clickOperation: PropTypes.func.isRequired,
}

export default Buttons
