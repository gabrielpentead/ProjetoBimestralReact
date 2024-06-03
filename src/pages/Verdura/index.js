import { Link } from 'react-router-dom';
import 'bootstrap';
import { data } from '../../data';

function Verduras() {
  const verduraa = data.filter(product => product.type === 'verdura');

  return (
    <div>
      <hr />
      <section className="categorias-quantidades">
        <span className="categorias-titulo">Verduras</span>
      </section>
      <hr />
      <main className="row produto-page">
        <div className="col-12">
          <div className="row">
            {verduraa.map((product, index) => (
              <div key={index} className="produto-container-prisncipal">
                <div className="produto-prisncipal">
                  <Link to={`/paginapd/${product.id}`} >
                    <img src={product.image} alt={product.name} className="img-fluid" />
                  </Link>
                  <span>{product.name}</span>
                  <span>
                    R$ <span className="price">{product.price}</span> <span className="unit">{product.unit}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Verduras;