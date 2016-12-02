import React from "react";


export default class Header extends React.Component {

  render() {

    const headerStyle = {
      marginBottom: "20px"
    };

    const titleStyle = {
      backgroundColor: "rgba(35,35,35,0.66)",
      padding: "20px"
    };

    return (
      <header style={headerStyle}>

        <div class="row">
          <div class="col-lg-12">
            <h1 style={titleStyle}>{this.props.title}</h1>
          </div>
        </div>

        <div class="fb-page" data-href="https://www.facebook.com/ShacrowDesign/" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false"><blockquote cite="https://www.facebook.com/ShacrowDesign/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/ShacrowDesign/">Shacrow</a></blockquote></div>

      </header>
    );
  }
}
