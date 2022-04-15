import React, { Component } from "react";
import NewsItems from "./NewsItems";

export class News extends Component {
  render() {
    return (
      <>
        <div>This is a comment</div>
        <NewsItems />
      </>
    );
  }
}

export default News;
