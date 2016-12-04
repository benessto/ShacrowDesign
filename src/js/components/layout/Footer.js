import React from "react";
import { IndexLink, Link } from "react-router";


export default class Footer extends React.Component {
  render() {

    const style = {
      padding: "20px"
    };

    const bgStyle = {
      backgroundColor: "#232323",
      marginTop: "20px"
    };

    const textStyle = {
      float: "left"
    };

    const fbPageStyle = {
      float: "right",
      marginTop: "20px"
    };

    return (
      <footer>

        <div style={bgStyle}>
          <div class="row" style={style}>
            <div class="col-lg-12">


              <p>
                <IndexLink to="/">Impressum</IndexLink>
              </p>

              <a target="_blank" href='https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=CYT9BU3YTEL2G'>
                <p>Donate via Paypal</p>
              </a>

              <p>Copyright &copy; Shacrow Design</p>

            </div>
          </div>
        </div>
      </footer>
    );
  }
}
