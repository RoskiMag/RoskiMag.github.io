import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Strapi from "strapi-sdk-javascript/build/main";

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
     console.log(this.state.posts);
  }

  render() {
    return (
      <div>
      </div>
    )
  }
}

export default Blog;
