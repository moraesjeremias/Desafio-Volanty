import React from 'react';
import './styles.css';

const Card = () => (
  <div className="card-columns">
  <div className="card mb-3" >
    <div className="row no-gutters">
      <div className="col-md-8">
        <div className="card-body">
          <form>
              <p>Marca</p>
              <select className="form-control">
                  <option>Marca</option>
              </select>
              <p>Modelo</p>
              <select className="form-control">
                  <option>Modelo</option>
              </select>
              <p>Ano</p>
              <select className="form-control">
                  <option>Ano</option>
              </select>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
);


export default Card;