import React, { Component } from 'react';
import NewsItem from './NewsItem';
import './news.css';

export class News extends Component {
  //!constructor of the class
  constructor() {
    super();
    // console.log('i am a constructor from newscomponent');

    //? creating state in a class based component
    this.state = {
      articles: [],
      loading: false,
    };
  }

  //! component did mount to fetch the api
  async componentDidMount() {
    try {
      let url =
        'https://newsapi.org/v2/top-headlines?country=in&apiKey=25f15108e69741c88288ed5dd8a82b64';
      let data = await fetch(url);
      let parsedData = await data.json();

      this.setState({ articles: parsedData.articles });
    } catch (e) {
      console.log('Something went wrong');
    }
  }

  render() {
    return (
      <div className="container my-3">
        <h1>
          <span>NewMonkey</span> - Top Headlines
        </h1>
        <div className="news-items">
          {/* to hamlog yaha par eek row ke andar max 3 col hoga ,matlab har row me 3 news item hoga....ab hamlog jo state declare kiye hai constructor me usme hamlog "articles" key ke andar sara news daal diye hai array ke form me jo hai ...ab yaha par map() array method ke help se sare array items ko iterate karenge jo "articles" key ke andar hai....array element eek object hai to... object ke andar jo keys present hai usko niakl kar ham apne newsitem components ko send kar rhe hai props ke madad se*/}
          {/* aur jo hamlog baar baar newsitem return  kar rhe uske wrapper (joki hamlog ke case me <div className="col"> hai) usko eek unique key dena hoga taki dusre item se uniquesly identify kar sake ...to hamlog news ka url de diye as a key*/}
          {this.state.articles.map((element) => {
            return (
              // <div >
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
              />
              // </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
