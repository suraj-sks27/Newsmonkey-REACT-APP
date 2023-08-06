import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import './news.css';
import PropTypes from 'prop-types';

import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {
  //! Proptypes in class
  static defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  //! Capitalize function
  Capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  //!constructor of the class
  constructor(props) {
    super(props);

    //? creating state in a class based component
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };

    document.title = `${this.Capitalize(this.props.category)} - NewsMonkey`;
  }

  //! Function to update news
  updateNews = async () => {
    try {
      //?running the progress bar from 0
      this.props.setProgress(10);

      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=25f15108e69741c88288ed5dd8a82b64&page=${this.state.page}&pageSize=${this.props.pageSize}`;

      //?show loading while featching data
      this.setState({ loading: true });

      let data = await fetch(url);
      let parsedData = await data.json();

      this.setState({
        articles: parsedData.articles,
        totalResults: parsedData.totalResults,
        //?after fetch is complete the disable the spinner
        loading: false,
      });
      //?running the progress bar from 0 to 100
      this.props.setProgress(100);
    } catch (e) {
      console.log('Something went wrong');
    }
  };

  //! component did mount to fetch the api
  async componentDidMount() {
    this.updateNews();
  }

  //! Fetchmore function to load more data on infinte scroll
  fetchMoreData = async () => {
    this.setState({
      page: this.state.page + 1,
    });

    try {
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=25f15108e69741c88288ed5dd8a82b64&page=${this.state.page}&pageSize=${this.props.pageSize}`;

      let data = await fetch(url);
      let parsedData = await data.json();

      this.setState({
        articles: this.state.articles.concat(parsedData.articles),
        totalResults: parsedData.totalResults,
      });
    } catch (e) {
      console.log('Something went wrong');
    }
  };

  render() {
    return (
      <div className="container my-3">
        <h1>
          <span>NewMonkey</span> - Top Headlines on{' '}
          {this.Capitalize(this.props.category)}
        </h1>
        {this.state.loading && <Spinner />}

        {/* adding infinite scroll */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          // style={{ display: 'flex', flexDirection: 'column-reverse' }}
          // inverse={true}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
          scrollableTarget="scrollableDiv"
        >
          <div className="news-items">
            {this.state.articles.map((element) => {
              return (
                <NewsItem
                  key={element.url}
                  title={element.title ? element.title.slice(0, 45) : ''}
                  description={
                    element.description ? element.description.slice(0, 80) : ''
                  }
                  imgUrl={
                    element.urlToImage
                      ? element.urlToImage
                      : 'https://imgeng.jagran.com/images/2023/aug/Samsung%20Galaxy%20Z%20Fold%20%2051691054786770.jpg'
                  }
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              );
            })}
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}

export default News;
