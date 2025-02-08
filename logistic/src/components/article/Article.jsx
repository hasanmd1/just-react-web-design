import React from 'react';
import './article.css';


const Article = ({imgUrl, date, title}) => {
  return (
    <div className='ship__blog-containers_article'>
      <div className="ship__blog-containers_article-image">
        <img src={imgUrl} alt='blog_image' />
      </div>
      <div className="ship__blog-containers_article-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Details</p>
      </div>
    </div>
  )
}

export default Article