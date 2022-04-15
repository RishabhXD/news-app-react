import React, { Component } from "react";
import NewsItems from "./NewsItems";
export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/everything?q=crypto&apiKey=d4dbb2c29bdc4152a0cb09f5f2a2ed24&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
    console.log(parsedData);
  }

  handleNextClick = async () => {
    if (this.state.page + 1 > Math.ceil(100 / this.props.pageSize)) {
    } else {
      let url = `https://newsapi.org/v2/everything?q=crypto&apiKey=d4dbb2c29bdc4152a0cb09f5f2a2ed24&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
      });
    }
  };
  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/everything?q=crypto&apiKey=d4dbb2c29bdc4152a0cb09f5f2a2ed24&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
    });
  };

  render() {
    return (
      <section className="text-gray-400 body-font bg-gray-900">
        <div className="container p-5 mx-auto">
          <div className="flex flex-wrap -m-4">
            {this.state.articles.map((element) => {
              return (
                <NewsItems
                  key={element.url}
                  title={element.title.slice(0, 50)}
                  description={element.description.slice(0, 88)}
                  imgUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              );
            })}
          </div>
        </div>
        <div className="flex space-x-2 justify-center">
          <div className="flex justify-between gap-x-8">
            <button
              type="button"
              className="inline-block px-6 py-2.5 bg-indigo-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out"
              disabled={this.state.page <= 1}
              onClick={this.handlePrevClick}
            >
              &larr; Previous
            </button>
            <button
              type="button"
              className="inline-block px-6 py-2.5 bg-indigo-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out"
              onClick={this.handleNextClick}
              disabled={
                this.state.page + 1 > Math.ceil(100 / this.props.pageSize)
              }
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </section>
    );
  }
}

export default News;
