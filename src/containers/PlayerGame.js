import React, { Component } from 'react'
import { connect } from 'react-redux'

class PlayerGame extends Component {
    render() {

        return (
            <div>
                {this.props.pg.name}
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerGame)