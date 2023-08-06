import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import './news.css';
import PropTypes from 'prop-types';

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
    // console.log('i am a constructor from newscomponent');

    //? creating state in a class based component
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };

    document.title = `${this.Capitalize(this.props.category)} - NewsMonkey`;
  }

  //! Function to update news
  updateNews = async () => {
    try {
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=25f15108e69741c88288ed5dd8a82b64&page=${this.state.page}&pageSize=${this.props.pageSize}`;

      //show loading while featching data
      this.setState({ loading: true });

      let data = await fetch(url);
      let parsedData = await data.json();

      this.setState({
        articles: parsedData.articles,
        totalResults: parsedData.totalResults,
        //after fetch is complete the disable the spinner
        loading: false,
      });
    } catch (e) {
      console.log('Something went wrong');
    }
  };

  //! component did mount to fetch the api
  async componentDidMount() {
    this.updateNews();
  }

  //! Methods of this class
  //? handlePrevious
  handlePrevious = async () => {
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };

  //? handleNext
  handleNext = async () => {
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };

  render() {
    return (
      <div className="container my-3">
        <h1>
          <span>NewMonkey</span> - Top Headlines on{' '}
          {this.Capitalize(this.props.category)}
        </h1>
        {this.state.loading && <Spinner />}
        <div className="news-items">
          {/* to hamlog yaha par eek row ke andar max 3 col hoga ,matlab har row me 3 news item hoga....ab hamlog jo state declare kiye hai constructor me usme hamlog "articles" key ke andar sara news daal diye hai array ke form me jo hai ...ab yaha par map() array method ke help se sare array items ko iterate karenge jo "articles" key ke andar hai....array element eek object hai to... object ke andar jo keys present hai usko niakl kar ham apne newsitem components ko send kar rhe hai props ke madad se*/}
          {/* aur jo hamlog baar baar newsitem return  kar rhe uske wrapper (joki hamlog ke case me <div className="col"> hai) usko eek unique key dena hoga taki dusre item se uniquesly identify kar sake ...to hamlog news ka url de diye as a key*/}
          {/* agar loading nhi chl rha tb props ko send karo warna wait karo loading hatne ka */}
          {!this.state.loading &&
            this.state.articles.map((element) => {
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

        <div className="container d-flex justify-content-between mt-2 bg-sucess">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevious}
          >
            &#8810; Previous
          </button>

          {/* //total results jo aa rha json file ke andar aur total no of news eek page me kitna aa rha dono ko divide kareka pata lga skte hai ki total kitna required pages ho skta hai...therefore Math.ceil ka use karke greatest round off kar rhe taki ye pata lga sake ki eek api fetch me aprox kitna pages hoga...aur agar hamlog ka next page usse bada hai to next button kaam nhi karega

          //example: page=1 totalpossiblePage=2....page=2 totalpossiblePage=2....page=3 totalpossiblePage=3(next button doesnt work). */}

          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNext}
          >
            Next &#8811;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
