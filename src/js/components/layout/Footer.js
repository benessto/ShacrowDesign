import React from "react";
import { IndexLink, Link } from "react-router";


export default class Footer extends React.Component {
  render() {

    const style = {
      padding: "20px"
    };

    const textStyle = {
      float: "left"
    };

    return (
      <footer>
          <div class="navbar-seperator"></div>

            <div class="row">
              <div class="col-lg-12">


                <p><a href="http://facebook.com/ShacrowDesign" target="_blank">
                  <button class="btn btn-footer">Facebook</button>
                </a></p>

                <p><a href="http://youtube.com/ShaXCwalk" target="_blank">
                  <button class="btn btn-footer">Youtube</button>
                </a></p>

                <p><IndexLink to="/HireMe">
                  <button class="btn btn-footer-big">READY FOR YOUR DESIGN?</button>
                </IndexLink></p>

                <p><a href="http://instagram.com/Shadisappear" target="_blank">
                  <button class="btn btn-footer">Instagram</button>
                </a></p>


                <p><a target="_blank" href='https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=CYT9BU3YTEL2G'>
                  <button class="btn btn-footer" >Donate</button>
                </a></p>

                <small><IndexLink to="/">Impressum</IndexLink></small>
                <small>Copyright &copy; Shacrow Design</small>

              </div>
            </div>
      </footer>
    );
  }
}
