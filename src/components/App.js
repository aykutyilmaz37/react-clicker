import React, { Component } from "react";

// #region Import Styles
import "bootstrap/dist/css/bootstrap.min.css";
// #endregion

// #region Import Views Jsx
import Layout from "../layout/Layout";
import ButtonClicker from "./ButtonClicker";
// #endregion

export default class App extends Component {
  render() {
    return (
      <Layout>
        <ButtonClicker />
      </Layout>
    );
  }
}
