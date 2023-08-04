import React, { Component } from 'react';

export class NewsItem extends Component {
  render() {
    //using destructuring to get props from the class object
    let { title, description, imgUrl, newsUrl } = this.props;

    return (
      <div>
        <div className="card" style={{ width: '18rem' }}>
          <img src={imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title.slice(0, 30)}.....</h5>
            <p className="card-text">{description.slice(0, 80)}....</p>
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
