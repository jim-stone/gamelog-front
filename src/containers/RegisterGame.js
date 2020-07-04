import React, { Component } from 'react';
import SearchBar from 'material-ui-search-bar';
import axios from 'axios';
import Pagination from '@material-ui/lab/Pagination';


import { styles } from '../theme';

import GameCard from '../components/GameCard';


export default class RegisterGame extends Component {
    constructor(props) {
        super(props)

        const initialState = {
            gameName: '',
            gamesFound: [],
            currentPage: 1
        }

        this.gamesPerPage = 10;

        this.state = localStorage.getItem('gameSearchState')
            ? JSON.parse(localStorage.getItem('gameSearchState'))
            : initialState;
        this.handleSubmit = this.handleSubmit.bind(this)
        this.renderGameCards = this.renderGameCards.bind(this)
        this.handlePageChange = this.handlePageChange.bind(this)

    };



    handleSubmit() {
        const partialName = this.state.gameName;
        const BGA_CLIENT_ID = "UKKJoAFebL";
        const url = `https://www.boardgameatlas.com/api/search?name=${partialName}&fields=id,name,description,thumb_url,mechanics,categories&client_id=${BGA_CLIENT_ID}`;
        axios.get(url)
            .then(response => this.setState({ gamesFound: response.data.games }))
    }

    renderGameCards() {
        const indexOfLastOnPage = this.state.currentPage * this.gamesPerPage;
        const indexOfFirstOnPage = indexOfLastOnPage - this.gamesPerPage;
        const currentGames = this.state.gamesFound
            ? this.state.gamesFound.slice(indexOfFirstOnPage, indexOfLastOnPage)
            : [];

        return (
            currentGames.map(game => <GameCard key={game.id} game={game} />)
        )

    }

    componentWillUnmount() {
        localStorage.setItem('gameSearchState', JSON.stringify(this.state));
    }


    handlePageChange(event, value) {
        this.setState({ currentPage: value });
    }


    render() {
        this.pagesCount = this.state.gamesFound
            ? Math.ceil(this.state.gamesFound.length / this.gamesPerPage)
            : 1
        return (
            <div className={styles.centeredContainer}>
                Please enter a game name or its part and press Enter:
                <br /><br /><br /><br />
                <SearchBar
                    name="gameSearch"
                    value={this.state.gameName}
                    onChange={(newValue) => this.setState({ gameName: newValue })}
                    onCancelSearch={() => this.setState({ gameName: '' })}
                    onRequestSearch={this.handleSubmit}
                    style={{
                        margin: '0 auto',
                        maxWidth: 800
                    }}
                />
                <br />
                {this.renderGameCards()}
                <br /> <br />
                <Pagination count={this.pagesCount} page={this.state.currentPage} showFirstButton showLastButton
                    onChange={this.handlePageChange}
                />
                <br /> <br /><br />
            </div>
        )
    }
}

