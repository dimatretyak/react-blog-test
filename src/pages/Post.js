import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { LOCALSTORAGE_KEY } from '../utils/constants';
import FullItem from './post/FullItem';

class Post extends Component {
  state = { posts: null }

  componentWillMount() {
    const posts = localStorage.getItem(LOCALSTORAGE_KEY);
    if(posts) this.setState({ posts: JSON.parse(posts) });
  }

  render() {
    const { posts } = this.state;
    const currentPost = posts.filter(post => post.slug === this.props.match.params.slug)[0];

    // Если пост не найден, кидаем 404 ошибку
    if(!currentPost) return <Redirect to="/404" />

    return (
      <FullItem {...currentPost} />
    );
  }
}

export default Post;