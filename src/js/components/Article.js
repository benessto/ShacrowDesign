import React from "react";

export default class Article extends React.Component {
  render() {
    const { title } = this.props;
    const { imgPath } = this.props;

    const titleStyle = {
      backgroundColor: "rgba(35,35,35,0.8)",
      fontSize: "15px",
      padding: "10px"
    };

    return (
      <div class="col-md-4">
        <h4 style={titleStyle}>{title}</h4>
        <img src={imgPath} class="img-thumbnail"></img>
      </div>
    );
  }
}
