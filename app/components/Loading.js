import React, { PropTypes } from 'react'
import styles from '../styles'

class Loading extends React.Component {
  constructor(props) {
    super(props)
    this.originalText = props.text
    this.state = {
      text: this.originalText
    }
  }

  componentDidMount() {
    let stopper = this.originalText + '...'
    this.interval = setInterval(() => {
      if(this.state.text === stopper) {
        this.setState({
          text: this.originalText
        })
      } else {
        this.setState({
          text: this.state.text + '.'
        })
      }
    }, this.props.speed)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (
      <div style={styles.container}>
        <p style={styles.content}>{this.state.text}</p>
      </div>
    )
  }
}

Loading.propTypes = {
  text: PropTypes.string,
  speed: PropTypes.number
}

Loading.defaultProps = {
  text: 'Loading',
  speed: 300
}

export default Loading
