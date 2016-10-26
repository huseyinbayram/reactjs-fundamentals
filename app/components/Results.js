import React, { PropTypes } from 'react'

const Results = (props) => {
  return (
    <div>Results</div>
  )
}

Results.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  scores: PropTypes.array.isRequired
}

export default Results
