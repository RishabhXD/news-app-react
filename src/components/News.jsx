import React, { useState } from "react";
import NewsItems from "./NewsItems";
import InfiniteScroll from "react-infinite-scroll-component";
const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [pages, setPages] = useState(1);
  const [totalResults, setTotalResults] = useState(1);

  const updateNews = async () => {
    let url = `https://newsapi.org/v2/everything?q=${props.topic}&apiKey=dc28211083c64f7ab654b8a96ebaec50&page=${pages}&pageSize=${props.pageSize}`;

    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
  };

  const componentDidMount = async () => {
    let url = `https://newsapi.org/v2/everything?q=${props.topic}&apiKey=${props.apiKey}&page=1&pageSize=${props.pageSize}`;

    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
  };

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/everything?q=${props.topic}&apiKey=dc28211083c64f7ab654b8a96ebaec50&page=${pages}&pageSize=${props.pageSize}`;

    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setPages(pages + 1);
  };

  return (
    <section className="text-gray-400 body-font bg-gray-900">
      <div className="container p-5 mx-auto">
        <div className="flex flex-wrap -m-4">
          {articles.map((element) => {
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
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length !== Math.ceil(100 / props.pageSize)}
            loader={<h4>Loading...</h4>}
          ></InfiniteScroll>
        </div>
      </div>
    </section>
  );
};

News.defaultProps = {
  topic: "general",
  pageSize: 20,
};

export default News;
