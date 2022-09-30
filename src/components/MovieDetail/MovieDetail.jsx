import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import * as actions from "./../../redux/actions/index"


// Importar las actions como Object Modules, sino los test no funcionarán!

// Fijense en los test que SI O SI tiene que ser un functional component, de otra forma NO VAN A PASAR LOS TEST
// Deben usar Hooks para que los test pasen (lease tambien lo de react-redux).
// No realicen un destructuring de ellos, sino que utilicenlos de la siguiente forma 'React.useState' y 'React.useEffect' ,
// Si no lo hacen asi los test no van a correr.
// TIP: Aqui seria un buen momento para utilizar el hook useSelector.

const MovieDetail = (props) => {

  let movieId = props.match.params.id
  const dispatch = useDispatch()

  React.useEffect(() => {
    
    dispatch(actions.getMovieDetail(movieId))
  })

  const movieDetail = useSelector(state =>  state.movieDetail )

  return (
    <div>
      <h3>{movieDetail.name}</h3>
      <p>{movieDetail.director}</p>
      <p>{movieDetail.description}</p>
      <p>{movieDetail.releaseYear}</p>
    </div>
  );
};

export default MovieDetail;
