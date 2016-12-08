import React from "react";

import Article from "../components/Article";
//import GoogleAd from "../components/GoogleAd.js";
import GoogleAd from "react-google-ad";
import Header from "../components/layout/Header";

export default class Featured extends React.Component {
  constructor() {
    super();
  }


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

              {/* Articles */}
              <div class="row">
                {/* KoreanPanda Gaming logo */}
                <Article type="logo"
                   title="KOREANPANDA GAMING LOGO DESIGN"
                   imgPath="../../img/koreanpanda_gaming_logo.png"
                   desc="Logo design made for KoreanPanda Gaming."/>
                 {/* 9Moons.gg logo */}
                <Article type="logo"
                   title="9MOONS.GG LOGO DESIGN"
                   imgPath="../../img/logo_1.png"
                   desc="9MOONS.GG LOGO DESIGN"/>

                <Article type="logo"
                   title="GALAXY NETWORK LOGO DESIGN"
                   imgPath="../../img/logo_3.png"
                   desc=""/>

                <Article type="logo"
                  title="DREAMERRO LOGO DESIGN"
                  imgPath="../../img/dreamerro_logo.png"
                  desc=""/>

                <Article type="logo"
                  title="GERMAN CLASH LOGO DESIGN"
                  imgPath="../../img/german_clash_logo.png"
                  desc=""/>

                <Article type="logo"
                  title="GERMAN CLASH DARK LOGO DESIGN"
                  imgPath="../../img/german_clash_dark_logo.png"
                  desc=""/>

                <Article type="logo"
                  title="ACT OF VIOLENCE LOGO"
                  imgPath="../../img/act_of_violence_logo.png"
                  desc=""/>

                <Article type="logo"
                  title="DEFIANT ESPORTS TEAM LOGO"
                  imgPath="../../img/defiant_logo.png"
                  desc=""/>

                <Article type="logo"
                  title="E2SPORTS LOGO REWORK"
                  imgPath="../../img/E2SPORTS_rework.png"
                  desc=""/>

                <Article type="twitch"
                  title="HUMANS TWITCH SET"
                  imgPath="../../img/humans_twitch_set_preview.png"
                  desc=""/>

                <Article type="twitch"
                  title="SHACROW BATTLERITE TWITCH SET"
                  imgPath="../../img/twitch_shacrow_BTR_preview.png"
                  desc=""/>

                <Article type="annoucement"
                  title="9MOONS.GG TOP 5 LEADERBOARD"
                  imgPath="../../img/9moons_leaderboard.png"
                  desc=""/>

                <a target="_blank" href="https://www.youtube.com/watch?v=R-RC49is8zU">
                <Article type="video"
                  title="GOGROGO YOUTUBE INTRO"
                  imgPath="../../img/gogrogo_intro.png"
                  desc=""/>
                </a>

                <Article type="character"
                  title="MINKALIE CHARACTER"
                  imgPath="../../img/minkalie_figur.png"
                  desc=""/>

                <Article type="logo"
                  title="STIXX VLOGS LOGO DESIGN"
                  imgPath="../../img/stixx_vlogs_logo.png"
                  desc=""/>

                <Article type="social"
                  title="DREAMERRO HALLOWEEN FB BANNER"
                  imgPath="../../img/dRO_Halloweenbanner_preview.png"
                  desc=""/>

                <Article type="pixel_art"
                  title="DREAMERRO CUSTOM SPRITE ANIMATED"
                  imgPath="../../img/dRO_Bloodmoon_preview.png"
                  desc=""/>

                <Article type="pixel_art"
                  title="DREAMERRO CUSTOM SPRITE"
                  imgPath="../../img/dRO_Guardianwings_preview.png"
                  desc=""/>

                <Article type="pixel_art"
                  title="DREAMERRO CUSTOM SPRITE"
                  imgPath="../../img/dRO_lionheart_preview.png"
                  desc=""/>
                <Article type="pixel_art"
                  title="DREAMERRO CUSTOM SPRITE ANIMATED"
                  imgPath="../../img/dRO_Reapersspirit_preview.png"
                  desc=""/>

                <Article type="gui"
                  title="KWOXER.DE APP GUI"
                  imgPath="../../img/kwoxer_championselect.png"
                  desc=""/>

              </div>

              <GoogleAd client="ca-pub-5164875500261952" slot="8300469279" format="auto" />

              {/* Google Ad
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
              </div>*/}

            </div>
          </div>
        </div>
      </div>
    );
  }
}
