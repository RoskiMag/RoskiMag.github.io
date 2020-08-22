import React, { Component } from 'react'
import { Link } from 'react-router-dom';
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
    var title = this.state.posts[postIndex].title;
    return (
      <div>
        <div className="post-middle">{title}</div>
      </div>
    )
  }
}

export default BlogPost;
