import "./home.css";

import React, { Component } from "react";

import { connect } from "react-redux";
// Importar las actions como Object Modules, sino los test no funcionarán!

// Fijense en los test que SI O SI tiene que ser un class component, de otra forma NO VAN A PASAR LOS TEST.

export class Home extends Component {
  componentDidMount() {}
  render() {
    return (
      <div className="home">

      </div>
    );
  }
}

export const mapStateToProps = undefined

export const mapDispatchToProps = undefined

export default connect(mapStateToProps, mapDispatchToProps)(Home);
