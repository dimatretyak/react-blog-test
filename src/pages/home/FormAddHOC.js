import React, { Component } from 'react';
import HOC from './HOC';

const validator = (key, value) => {
  let validate = {
    hasError: false,
    error: {}
  };

  validate.error[key] = validate.error[key] || [];

  switch (key) {
    case 'title':
      if(value.length < 5) validate.error[key].push('Минимальная длина логина 5 символов');
      if(value.length > 15) validate.error[key].push('Максимальная длина логина 15 символов');
      break;
    case 'author':
      if(value.length < 5) validate.error[key].push('Минимальная длина имени автора 5 символов');
      if(value.length > 20) validate.error[key].push('Максимальная длина имени автора 20 символов');
  }

  validate.hasError = Object.keys(validate.error).some(key => validate.error[key].length > 0);
  return validate;
}

const Input = (props) => <input name={props.name} handleChange={ this.props.handleChange(props.name) } {...props} />

class FormAdd extends Component {
  render() {
    const { title, author, slug, body } = this.props.values;
    const { error, hasError = true } = this.props;

    return (
      <form onSubmit={ this.props.handleSubmit } className="form-group pt-3">
      <div className="form-group">
        <input
          type="text"
          name="title"
          className="form-control"
          placeholder="Заголовок"
          onChange={ this.props.handleChange('title')}
          value={ title }
        />
      </div>
      <div className="form-group">
        <input
          type="text" 
          name="author" 
          className="form-control" 
          placeholder="Данные автора" 
          onChange={ this.props.handleChange('author')} 
          value={ author } 
        />
      </div>
      <div className="form-group">
        <input type="text" 
          name="slug"
          className="form-control"
          placeholder="Адрес ЧПУ"
          onChange={ this.props.handleChange('slug')}
          value={ slug }
        />
      </div>
      <div className="form-group">
        <textarea name="body" 
          className="form-control" 
          placeholder="Пример текста" 
          onChange={ this.props.handleChange('body') } 
          value={ body }
        />
      </div>
      <input type="submit" value="Добавить новость" className="btn btn-primary" disabled={ hasError }/>  
    </form>
    );
  }
}
export default HOC(FormAdd, { title: '', author: '', slug: '', body: '' }, validator);