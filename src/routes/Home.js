import React from 'react';
import Movie from '../components/Movie';
import './Home.css';

class Home extends React.Component {
    state = {
        isLoading: true,
        movies: [],
    };

    getMovies = async () => {
        /*        
        const {
            data: { movies },            
        } = await fetch('https://yts-proxy.now.sh/list_movies.json?sort_by=rating')
                .then(response => response.json())

        this.setState({ movies, isLoading: false });
        */
       await fetch('https://yts-proxy.now.sh/list_movies.json?sort_by=rating')
            .then(response => response.json())
            .then(json => {
                const movies = json.data.movies;
                console.log(movies);
                this.setState({ movies, isLoading: false });
            });        
    }

    componentDidMount() {
        this.getMovies();
    }

    render() {
        const { isLoading, movies } = this.state;
        return (
            <section className="container">
                {isLoading ? (
                    <div className="loader">
                        <span className="loader_text">Loading...</span>
                    </div>
                ) : (
                    <div className="movies">
                        {movies.map(movie =>
                            <Movie 
                                key={movie.id}
                                year={movie.year}
                                title={movie.title}
                                summary={movie.summary}
                                poster={movie.medium_cover_image}
                                genres={movie.genres}
                                rating={movie.rating}
                            /> 
                        )}    
                    </div>
                )}
            </section>
        );
    }
}

export default Home;