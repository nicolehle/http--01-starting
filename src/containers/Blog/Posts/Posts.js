import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import './Posts.module.css';
import Post from '../../../components/Post/Post';

class Posts extends Component {
  state = {
    posts: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
          .then(response => {
            const posts = response.data.slice(0,4);
            const updatePosts = posts.map(post => {
              return {
                  ...post,
                  author: 'max'
              }
            });
            this.setState({ posts: updatePosts})
          })
          .catch(error => {
            console.log(error)
          })
  }

  render() {
    let posts = <p style={{textAlign: 'center'}}>Someting went worng!</p>
    if(!this.state.error){
      posts = this.state.posts.map((post) => {
        return (
          <Link key={post.id} to={'/' + post.id}>
              <Post
              title={post.title}
              author={post.author}/>
          </Link>
        )
      })
    }

    return (
      <section className="Posts">
          {posts}
      </section>
    );
  }
}

export default Posts;
