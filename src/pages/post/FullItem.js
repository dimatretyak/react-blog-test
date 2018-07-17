import React, { Component } from 'react';
import defaultPreview from '../../asset/image/preview.svg'

class FullItem extends Component {
  render() {
    const { title, author, date, preview, body } = this.props;
    const description = body.split('\n');

    return (
      <div className="col-md-8 offset-md-2">
        <div className="card mb-4 box-shadow">
          <img src={ preview || defaultPreview } className="card-img-top" alt={ title }/>
          
          <div className="card-body">
            <h2 className="card-text">{ title }</h2>
          </div>

          <ul className="list-group list-group-flush">
            { description.map((paragraph, index) => <li key={`paragraph-${index}`} className="list-group-item">{ paragraph }</li>) }
          </ul>

          <div className="card-footer">
            <div className="d-flex justify-content-between align-items-center">
              { date && <small className="text-muted">Дата публикации: { new Date(date).toLocaleDateString() }</small> }
              { author && <small className="text-muted">Автор: { author }</small> }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FullItem;