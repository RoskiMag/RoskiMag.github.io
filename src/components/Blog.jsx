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
     let posts;
     try {
       posts = await strapi.getEntries("blogposts");
       this.setState({ posts });
     }
     catch(err) {
      alert(err);
     }
     this.state.posts = this.state.posts.reverse();
     this.setState({ posts });
     console.log(this.state.posts);
  }

  render() {
    return (
      <div className="post-grid">
        {this.state.posts.map((post, index) => (
          <div className="post-thumbnail" key={index}>
            <Link to={`/blog/${index}/${post.title}`}>
              <img src={post.image_1_url} className="post-thumbnail-image"/>
              <div className="post-thumbnail-title">{post.title}</div>
            </Link>
              <div className="post-thumbnail-blurb">{post.blurb}</div>
              <div className="post-thumbnail-credits">by {post.author} — {post.date_published}</div>
          </div>
        ))}
      </div>
    )
  }
}

export default Blog;
