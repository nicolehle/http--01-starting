import React, { Component } from 'react';
//import axios from 'axios';
import { Route, NavLink, Switch } from 'react-router-dom';


import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';

class Blog extends Component {


  selectPostHandler(id) {
    this.setState({selectedId: id})
  }
    render () {

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink
                                to='/'
                                exact>Home</NavLink></li>
                            <li><NavLink to={{
                              pathname:'/new-post',
                              hash:'#submit',
                              search:'?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>

                <Switch>
                    <Route path="/" exact component={Posts} />
                    <Route path="/new-post" component={NewPost} />
                    <Route path="/:id" component={FullPost} />
                </Switch>

            </div>
        );
    }
}

export default Blog;
