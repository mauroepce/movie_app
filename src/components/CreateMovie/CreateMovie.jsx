import React from "react";
import { useDispatch } from "react-redux";
import * as actions from "./../../redux/actions/index"
// Importar las actions como Object Modules, sino los test no funcionarán!

// Fijense en los test que SI O SI tiene que ser un functional component, de otra forma NO VAN A PASAR LOS TEST
// Deben usar Hooks para que los test pasen.
// No realicen un destructuring de ellos, sino que utilicenlos de la siguiente forma 'React.useState' y 'React.useEffect' ,
// Si no lo hacen asi los test no van a correr.

const CreateMovie = () => {

  let dispatch = useDispatch();

  const [input, setInput] = React.useState({
    name: "",
    releaseYear: 0,
    description: "",
    director: "",
  })

  const handleInputChange = e => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(actions.createMovie(input))
  }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Name: </label>
          <input type="text" name="name" value={input.name} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="">ReleaseYear: </label>
          <input type="number" name="releaseYear" value={input.releaseYear} onChange={handleInputChange}/>
        </div>
        <div>
          <label htmlFor="">Description: </label>
          <textarea name="description" id="" cols="30" rows="10" value={input.description} onChange={handleInputChange}/>
        </div>
        <div>
          <label htmlFor="">Director: </label>
          <input type="text" name="director" value={input.director} onChange={handleInputChange}/>
        </div>
        <div>
          <button type="submit">Create Movie</button>
        </div>
      </form>
    </div>
  );
};

export default CreateMovie;
