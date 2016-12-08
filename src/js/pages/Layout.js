import React from "react";
import { Link } from "react-router";

import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";
import Header from "../components/layout/Header";

export default class Layout extends React.Component {

  render() {
    const { location } = this.props;
    const containerStyle = {
      marginTop: "50px"
    };
    const fbStyle = {
      zIndex: "1001",
      position: "absolute",
      left: "10px",
      bottom: "10px",
      marginTop: "5px"
    }
    console.log("layout");
    return (
      <div id="particles-js">

        {/*<div class="fb-like" data-href="https://www.facebook.com/ShacrowDesign/" data-layout="standard" data-action="like" data-show-faces="false" data-share="true" style={fbStyle} ></div>*/}

          {/*<div>
            <Link to="/">
            <img src="../../img/banner.png" class="img-banner">
            </img>
            </Link>
          </div> */}

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
