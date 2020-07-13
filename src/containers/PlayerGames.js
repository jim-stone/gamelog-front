import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getMyGames } from '../actions/playergames';
// import PlayerGame from './PlayerGame';
import KnownGameCard from '../components/KnownGameCard';


class PlayerGames extends Component {

    componentDidMount() {
        this.props.getMyGames();
    }

    render() {
        const games = [...this.props.playerGames.data];
        const listItems = games.map((pg) =>
            <KnownGameCard game={pg} key={pg.id} />
        );
        return (
            <Fragment>
                <h2>Games you know</h2>
                {listItems}
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
