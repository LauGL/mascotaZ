const CardMascotas = ({ item }) => {
  return (
    <div className="col-12 col-md">
      <div className="card h-100">
        <div className="card-body d-flex flex-column align-content-center">
          <img src={item.imagen} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="text-muted fs-3 fs-md-2">{item.nombre}</p>
            <p className="text-muted">{item.raza}</p>
            <p className="text-muted fs-3 fs-md-2">{item.historia}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

CardMascotas.propTypes = {
  item: CardMascotas.object,
};

export default CardMascotas;
