import React from 'react';
import './blog.css';
import Article from '../../components/article/Article';
import {blog01, blog02, blog03, blog04, blog05} from './imports';

const Blog = () => {
  return (
    <div className='ship__blog section__padding' id='blog'>
      <div className='ship__blog-heading'>
        <h1 className='gradient__text'>Updated news on shipping.</h1>
      </div>
      <div className='ship__blog-containers'>
        <div className='ship__blog-containers-group-A'>
          <Article imgUrl={blog01} date='June 26, 2023' title='Shippers Bled Dry as Long-Term Contract Rates Soar Above Spot'/>
        </div>
        <div className='ship__blog-containers-group-B'>
          <Article imgUrl={blog02} date='May 26, 2023' title='Shipping News Alert: Sudden Labor Strike @ Ports of NY & NJ! - Universal Cargo'/>
          <Article imgUrl={blog03} date='April 26, 2023' title='UK signed document blocking efforts to make IMO more transparent - Unearthed'/>
          <Article imgUrl={blog04} date='March 26, 2023' title='G7 ministers push for shipping to attain zero GHG emissions by 2050 - Offshore Energy'/>
          <Article imgUrl={blog05} date='Frbruary 26, 2023' title='Poll: is the shipping industry doing enough to curb carbon emissions?'/>
        </div>
      </div>
    </div>
  )
}

export default Blog