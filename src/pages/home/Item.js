import React, { Component } from 'react';
import defaultPreview from '../../asset/image/preview.svg'

class Item extends Component {
  render() {
    const { title, author, date, preview, slug, prefix = "blog", id } = this.props;
    const link = prefix && prefix.length > 0 ? `/${prefix}/${slug}` : slug;

    return (
      <div className="col-md-6 col-lg-4">
        <div className="card mb-4 box-shadow">
          <img src={ preview || defaultPreview } className="card-img-top" alt={ title }/>
          
          <div className="card-body">

            <p className="card-text">
              <a href={ link } className="text-muted">{ title }</a>
            </p>

            <div className="d-flex justify-content-between align-items-center">
              { date && <small className="text-muted">{ new Date(date).toLocaleDateString() }</small> }
              { author && <small className="text-muted">{ author }</small> }
            </div>

          </div>

          <div className="card-footer">
            <div className="btn-group d-flex">
              <a href={ link } className="btn w-100 btn-sm btn-outline-secondary">Просмотреть</a>
              <button
                onClick={ this.props.handleRemove(id) }
                type="button"
                className="btn w-100 btn-sm btn-outline-danger"
              >Удалить</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Item;