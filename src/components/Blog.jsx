import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Strapi from "strapi-sdk-javascript/build/main";

import '../components/css/Blog.css'

const strapi = new Strapi("https://rm-blog.herokuapp.com/");

class Blog extends Component {
  constructor(props) {
    super(props);
      this.state = {
       posts: []
     }
   }

   async componentDidMount() {
     try {
       const posts = await strapi.getEntries("blogposts");
       this.setState({ posts });
     }
     catch(err) {
      alert(err);
     }
     this.state.posts = this.state.posts.reverse();
     console.log(this.state.posts);
  }

  render() {
    return (
      <div className="post-grid">
        {this.state.posts.map((post, index) => (
          <div className="post-thumbnail" key={index}>
            <Link to={`/blog/${index}/${post.title}`}>
              <img src={`https://rm-blog.herokuapp.com${post.images[0].url}`} className="post-thumbnail-image"/>
              <div className="post-thumbnail-title">{post.title}</div>
            </Link>
          </div>
        ))}
      </div>
    )
  }
}

export default Blog;
