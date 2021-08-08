import React from 'react';
import { Movie } from './Movie';

const Movies = ({ movies }) => {

  return (
    <div className="movies">
      {movies?.length ? (
        movies.map((movie) => {
          return <Movie key={movie.imdbID} {...movie} />;
        })
      ) : (
        <h4>Nothing Found</h4>
      )}
    </div>
  );
};

export { Movies };
