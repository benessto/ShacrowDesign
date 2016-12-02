import React from "react";


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



              <p>Impressum</p>

              <p>Copyright &copy; Shacrow Design</p>

            </div>
          </div>
        </div>
      </footer>
    );
  }
}
