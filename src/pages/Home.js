import React, { Component } from 'react';
import ItemList from './home/ItemList';
import FormAdd from './home/FormAdd';
import { LOCALSTORAGE_KEY } from '../utils/constants';

class Home extends Component {
  state = {
    showAddForm: false,
    posts: null
  }

  handleRemove = id => e => {
    this.setState({
      posts: this.state.posts.filter(item => item.id !== id)
    }, this.afterUpdate);
  }

  afterUpdate() {
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(this.state.posts));
  }

  componentWillMount() {
    const posts = localStorage.getItem(LOCALSTORAGE_KEY);
    if(posts) this.setState({ posts: JSON.parse(posts) });
  }

  handleClick = () => {
    this.setState(prevState => ({
      showAddForm: !prevState.showAddForm
    }))
  }

  handleSubmit = data => {

    if(this.state.posts.some(post => post.slug === data.slug)) {
      console.error('Запись с таким ЧПУ уже есть в системе');
      // Показываем ошибку пользователю
      return;
    }

    const size = this.state.posts.length;
    const lastIndex = size !== 0 ? this.state.posts[size - 1].id : 0;

    const newPost = {
      ...data,
      date: new Date().getTime(),
      preview: "http://via.placeholder.com/350x230",
      id: lastIndex + 1
    }

    this.setState(prevState => ({
      posts: prevState.posts.concat(newPost)
    }), this.afterUpdate)
  }

  render() {
    return (
      <div className="col-12">

        <div className="pb-3">
          <button className="btn btn-block btn-outline-primary" onClick={ this.handleClick }>Добавить новость</button>
          { this.state.showAddForm && <FormAdd handleSubmit={ this.handleSubmit }/> }
        </div>

        <div className="row">
          <ItemList 
            posts={ this.state.posts } 
            handleRemove={ this.handleRemove } 
          />
        </div>
      </div>
    )
  }
}

export default Home;