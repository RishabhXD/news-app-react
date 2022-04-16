import React, { Component } from "react";
import NewsItems from "./NewsItems";
import InfiniteScroll from "react-infinite-scroll-component";
export class News extends Component {
  static defaultProps = {
    topic: "general",
    pageSize: 20,
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
  }

  async updateNews() {
    let url = `https://newsapi.org/v2/everything?q=${this.props.topic}&apiKey=dc28211083c64f7ab654b8a96ebaec50&page=${this.state.page}&pageSize=${this.props.pageSize}`;

    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/everything?q=${this.props.topic}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`;

    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }

  fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/everything?q=${this.props.topic}&apiKey=dc28211083c64f7ab654b8a96ebaec50&page=${this.state.page}&pageSize=${this.props.pageSize}`;

    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      page: this.state.page + 1,
    });
  };

  handleNextClick = async () => {
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };
  handlePrevClick = async () => {
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
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
            <InfiniteScroll
              dataLength={this.state.articles.length}
              next={this.fetchMoreData}
              hasMore={
                this.state.articles.length !==
                Math.ceil(100 / this.props.pageSize)
              }
              loader={<h4>Loading...</h4>}
            ></InfiniteScroll>
          </div>
        </div>
      </section>
    );
  }
}

export default News;
