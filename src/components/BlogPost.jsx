import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../components/css/BlogPost.css'

import Strapi from "strapi-sdk-javascript/build/main";

const strapi = new Strapi("https://rm-blog.herokuapp.com/");

class BlogPost extends Component {
  constructor(props) {
    super(props);
      this.state = {
       posts: []
     }
   }

   async componentDidMount() {
     try {
       const posts = await strapi.getEntries("blogposts");
       posts.reverse();
       this.setState({ posts });
     }
     catch(err) {
      alert(err);
     }
     console.log(this.state.posts);
  }

  render() {
    const { params: { postIndex } } = this.props.match;
    if( this.state.posts[postIndex] == null){
       this.state.posts[postIndex] = {title: "temp title"};
    }
    const thisPost = this.state.posts[postIndex];
    return (
      <div>
        <div className="post-middle">
          <div className="post-title-header">{thisPost.title}</div>
          <img src={thisPost.image_1_url} className="post-main-image"/>
          <div className="post-content">
            {thisPost.content}
          </div>
        </div>
      </div>
    )
  }
}

export default BlogPost;
