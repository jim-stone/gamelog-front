import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getMyGames } from '../actions/playergames';
import PlayerGame from './PlayerGame';

class PlayerGames extends Component {

    componentDidMount() {
        this.props.getMyGames();
    }

    render() {
        const games = [...this.props.playerGames.data];
        const listItems = games.map((pg) =>
            <li key={pg.id}>
                <PlayerGame pg={pg} />
            </li>
        );
        return (
            <Fragment>
                <h3>Games you know:</h3>
                <ul>
                    {listItems}
                </ul>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = (dispatch) => {
    return {
        getMyGames: () => dispatch(getMyGames()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerGames)
