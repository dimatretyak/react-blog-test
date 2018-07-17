import React, { Component } from 'react';
import Item from './Item';
import Alert from '../../components/Alert';

class ItemList extends Component {
  render() {
    const { posts } = this.props;
    
    if(posts && posts.length === 0) return <Alert text="Нет контента для отображения" type="warning" />

    return posts.map(post => (
      <Item key={`item-${post.id}`} {...post} handleRemove={ this.props.handleRemove }/>
    ));
  }
}

export default ItemList;