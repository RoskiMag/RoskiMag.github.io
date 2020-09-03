import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import PrevNextBlog from './PrevNextBlog.jsx';
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
  }

  render() {
    const { params: { postIndex } } = this.props.match;
    if( this.state.posts[postIndex] == null){
       this.state.posts[postIndex] = {title: "temp title"};
    }
    const thisPost = this.state.posts[postIndex];
    let prev_link = "";
    let prev_title = "";
    let next_link = "";
    let next_title = "";

    if( postIndex == 0 ){
      prev_title = this.state.posts[this.state.posts.length - 1].title;
      prev_link = `/blog/${this.state.posts.length - 1}/${prev_title}`
    }else{
      if( this.state.posts[Number(postIndex) - 1] == null){
         prev_title = "";
      }else{
        prev_title = this.state.posts[Number(postIndex) - 1].title}
        prev_link = `/blog/${Number(postIndex) - 1}/${prev_title}`
    }
    if( postIndex == this.state.posts.length - 1 ){
      if( this.state.posts[0] == null){
         next_title = "";
      }else{
        next_title = this.state.posts[0].title;
        next_link = `/blog/${0}/${next_title}`
      }
    }else{
      next_title = this.state.posts[Number(postIndex) + 1].title;
      next_link = `/blog/${Number(postIndex) + 1}/${next_title}`
    }
    return (
      <div className="post-page">
      <div className="tags-nav">
      <Link to="/blog">
        ←ALL POSTS
      </Link>
      </div>
      <div className="post-info-sidebar">

      </div>
      <PrevNextBlog
        prev_link={prev_link}
        prev_title={prev_title}
        next_link={next_link}
        next_title={next_title}
      />
        <div className="post-middle">
          <div className="post-title-header">{thisPost.title}</div>
          <img src={thisPost.image_1_url} className="post-main-image"/>
          <div
            className="post-content"
            dangerouslySetInnerHTML={{
              __html: thisPost.content
            }}></div>
        </div>

      </div>
    )
  }
}

export default BlogPost;
