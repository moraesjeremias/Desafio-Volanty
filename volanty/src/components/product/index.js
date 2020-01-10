import React, { useState, useEffect  } from 'react';
import './styles.css';
import API from '../../services/api';

let makers = '';
let automob = '';
let period = '';



export default function Cards() {

    const [makes, setMakes] = useState([]);
    const [models, setModels] = useState([]);
    const [years, setYears] = useState([]);
    const [versions, setVersion] = useState([]);
    const [car, setCar] = useState({});

    useEffect(() => {
      function loadMakes() {
          API.getMakes().then(
            response => {
              setMakes(response.data);
            });
      }
      loadMakes();
    })

    function loadModels (make) {
      makers = make
      API.getModels(make).then(
        response => {
          setModels(response.data);
          setYears([]);
          setVersion([]);
        }
      );
    }

    function loadYears (makeModel){
      automob = makeModel
      API.getYear(makers, makeModel).then(response =>{
        setYears(response.data);
        setVersion([]);
      })
    }

    function loadVersion (makeModelYear){
      period = makeModelYear
      API.getVersions(makers, automob, makeModelYear).then(response =>{
        setVersion(response.data);
        setCar({});
      })
    }
    
    function loadCar (makeModelYearVersion){

      API.getCar(makers, automob, period, makeModelYearVersion).then(response => {
        setCar(response.data);
        console.log(versions);
      })
    };

    function currenzialize (value) {
        let formated = parseFloat(value)
              .toFixed(2)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        let [int, decimal] = formated.split('.');
        let newformated = `${int.replace(',', '.')},${decimal}`;

        if (isFloat(newformated)) {
          return newformated;
          } else {
            return 0;
          }
    }

    function isFloat(value) {
      var f = parseFloat(value);
      var floor = Math.floor(f);
      var fraction = f - floor;
      if (fraction > 0) {
        return true;
      }
      return false;
    }    

    return(
              <div className="card-columns-vol">
                <div className="card mb-3" >
                  <div className="row no-gutters">
                    <div className="col-md-8">
                      <div className="card-body">
                        <form>
                            <p>Marca</p>
                            <select className="form-control" id="makes" onChange={e => loadModels(e.target.value)}>
                              <option>Marca</option>
                              {makes.map(make => (
                                <option key={make.data} value={make.data}>{make}</option>
                              ))}
                            </select>
                            
                            <p>Modelo</p>
                            <select className="form-control" id="models" onChange={e => loadYears(e.target.value)}>
                                <option>Modelo</option>
                                {models.map((model, idx) =>( 
                                <option key={idx} value={model.data}>{model}</option>
                                ))}
                            </select>
                            
                            <p>Ano</p>
                            <select className="form-control" id="year" onChange={e => loadVersion(e.target.value)}>
                                <option>Ano</option>
                                {years.map((year, idx) => (
                                <option key={idx} value={year.data}>{year}</option>
                                ))}
                            </select>
                            <p>Versão</p>
                            <select className="form-control" id="version" onChange={e => loadCar(e.target.value)}>
                              <option>Versão</option>
                              {versions.map((version, idx) => (
                                <option key={idx} value={version.versionId}>{version.version}</option>
                              ))}
                            </select>
                        </form>
                          <p>Meu Carro Vale</p>
                          <p>R${currenzialize(car.pisoPrecoMedioVolanty) || 0}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>                        
    )

}
