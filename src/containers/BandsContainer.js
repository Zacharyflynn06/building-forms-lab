import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import { connect } from 'react-redux'
import Bands from '../components/Bands'

class BandsContainer extends Component {
  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand} />
        <Bands bands={this.props.bands}/>
      </div>
    )
  }
}

const mapState = ({ bands }) => ({ bands })

const mapDispatch = dispatch => ({ addBand: band => dispatch({ type: "ADD_BAND", band }) })

export default connect(mapState, mapDispatch)(BandsContainer)