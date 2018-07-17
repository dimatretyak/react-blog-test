import React, { Component } from 'react';

class FormAdd extends Component {
  state = {
    title: '',
    slug: '',
    body: '',
    author: ''
  }

  handleChange = key => e => {
    this.setState({
      [key]: e.target.value
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleSubmit(this.state);
  }

  render() {

    const { title, author, slug, body } = this.state;

    return (
      <form onSubmit={ this.handleSubmit } className="form-group pt-3">
      <div className="form-group">
        <input
          type="text"
          name="title"
          className="form-control"
          placeholder="Заголовок"
          onChange={ this.handleChange('title')}
          value={ title }
        />
      </div>
      <div className="form-group">
        <input
          type="text" 
          name="author" 
          className="form-control" 
          placeholder="Данные автора" 
          onChange={ this.handleChange('author')} 
          value={ author } 
        />
      </div>
      <div className="form-group">
        <input type="text" 
          name="slug"
          className="form-control"
          placeholder="Адрес ЧПУ"
          onChange={ this.handleChange('slug')}
          value={ slug }
        />
      </div>
      <div className="form-group">
        <textarea name="body" 
          className="form-control" 
          placeholder="Пример текста" 
          onChange={ this.handleChange('body') } 
          value={ body }
        />
      </div>
      <input type="submit" value="Добавить новость" className="btn btn-primary" />  
    </form>
    );
  }
}

export default FormAdd;