import React from "react";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import CreateMovie from "./components/CreateMovie/CreateMovie";
import { Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Nav />
      <Route exact path ="/" component={Home} />
      <Route exact path="/movie/:id" component={MovieDetail} />
      <Route exact path="/movies/create" component={CreateMovie} />
    </React.Fragment>
    
  );
}
export default App;
