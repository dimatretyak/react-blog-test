import React from 'react';

export default function Alert(props) {
  const text = props.text || "Ошибка выполнения запроса";
  const type = props.type || "danger";

  return (
    <div className="col-12">
      <p className={`alert alert-${type}`}>{ text }</p>
    </div>
  )
}