import React from "react";
import { Link } from "react-router";

import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";
import Header from "../components/layout/Header";

export default class Layout extends React.Component {
  render() {
    const { location } = this.props;
    const containerStyle = {
      marginTop: "60px"
    };
    const fbStyle = {
      float: "right"
    }
    console.log("layout");
    return (
      <div id="particles">

          {/*}<div>
            <Link to="/">
            <img src="../../img/banner.png" class="img-banner">
            </img>
            </Link>
          </div>*/}

          <Nav location={location} />

          <div class="container" style={containerStyle}>

            <div class="row">
              <div class="col-lg-12">

                {this.props.children}

              </div>
            </div>
          </div>

          <Footer/>
      </div>

    );
  }
}
