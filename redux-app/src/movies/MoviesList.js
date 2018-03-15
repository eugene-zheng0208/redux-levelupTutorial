/* eslint react/no-did-mount-set-state: 0 */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import Movie from './Movie';
import { getMovies } from './actions'

class MoviesList extends PureComponent {
	componentDidMount() {
		const { getMovies, isLoaded, moviesLoadedAt } = this.props;
		const oneHour = 60 * 60 * 1000;

		// Check if current time since movies were loaded is greater than oneHour:
		console.log( ( new Date() ), moviesLoadedAt ); // will show one Date obj and a string
		console.log( ( new Date() ), new Date( moviesLoadedAt ) ); // will show two Date objects
		console.log( ( new Date() ) - new Date( moviesLoadedAt ) );
		if ( ! isLoaded || ( ( new Date() ) - new Date( moviesLoadedAt ) ) > oneHour ) {
			getMovies(); // same as this.props.getMovies();
		}
	}

	render() {
		const { movies, isLoaded } = this.props;

		if ( ! isLoaded ) {
			return <h1>Loading...</h1>
		}

		return (
			<MovieGrid>
				{ movies.map( movie => <Movie key={ movie.id } movie={ movie } /> ) }
			</MovieGrid>
		);
	}
}

const mapStateToProps = state => ( {
	movies: state.movies.movies, // You can see this path in the State tab of Redux DevTools
	isLoaded: state.movies.moviesLoaded,
	moviesLoadedAt: state.movies.moviesLoadedAt,
} );

const mapDispatchToProps = dispatch => bindActionCreators( {
	getMovies,
}, dispatch );

export default connect( mapStateToProps, mapDispatchToProps )( MoviesList );

const MovieGrid = styled.div`
	display: grid;
	padding: 1rem;
	grid-template-columns: repeat(6, 1fr);
	grid-row-gap: 1rem;
`;
