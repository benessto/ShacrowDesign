import React from "react";

import Article from "../components/Article";
import GoogleAd from "../components/GoogleAd.js";
import Header from "../components/layout/Header";

export default class Featured extends React.Component {

  render() {

    console.log("featured");

    const adStyle = {
      margin: "10px"
    };

    const adBlockStyle = {
      marginTop: "20px"
    };

    const fbStyle = {
      marginBottom: "15px",
    };


    return (
      <div>
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <Header title="PORTFOLIO" />

              {/*<div class="fb-like" data-href="https://www.facebook.com/ShacrowDesign/" data-layout="standard" data-action="like" data-show-faces="false" data-share="true" style={fbStyle} ></div>*/}


              {/* Articles */}
              <div class="row">
                <Article title="KOREANPANDA GAMING LOGO DESIGN" imgPath="../../img/koreanpanda_gaming_logo.png"/>
                <Article title="STIXX VLOGS LOGO DESIGN" imgPath="../../img/stixx_vlogs_logo.png"/>
                <Article title="9MOONS.GG LOGO DESIGN" imgPath="../../img/logo_1.png"/>
                <Article title="GALAXY NETWORK LOGO DESIGN" imgPath="../../img/logo_3.png"/>
                <a target="_blank" href="https://www.youtube.com/watch?v=R-RC49is8zU"><Article  title="GOGROGO YOUTUBE INTRO" imgPath="../../img/gogrogo_intro.png"/></a>
                <Article title="DREAMERRO LOGO DESIGN" imgPath="../../img/dreamerro_logo.png"/>
                <Article title="GERMAN CLASH LOGO DESIGN" imgPath="../../img/german_clash_logo.png"/>
                <Article title="GERMAN CLASH DARK LOGO DESIGN" imgPath="../../img/german_clash_dark_logo.png"/>
              </div>

              {/* Google Ad */}
              <div class="row">
                <div class="col-lg-12">
                  <div style={adBlockStyle}>
                    <GoogleAd
                    client="ca-pub-5164875500261952"
                    slot="8300469279"
                    format="auto"
                    wrapperDivStyle={adStyle}
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}
