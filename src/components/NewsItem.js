import React, { Component } from 'react';
import './newsItems.css';

export class NewsItem extends Component {
  render() {
    //using destructuring to get props from the class object
    let { title, description, imgUrl, newsUrl, author, date, source } =
      this.props;

    return (
      <div>
        <div className="card" style={{ width: '20rem' }}>
          <img src={imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-body-secondary">
                By, {author ? author : 'Unknown Source'} <br />
                on, {new Date(date).toUTCString()}
              </small>
            </p>
            <p>
              <span className="newsitem-source">{source}</span>
            </p>
            <a
              href={newsUrl}
              rel="noreferrer"
              target="_blank"
              className="btn btn-primary"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
