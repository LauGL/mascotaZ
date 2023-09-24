import CardMascotas from "../components/CardMascotas";
import { detailsPets } from "../data/pets";

const Mascotas = () => {
  return (
    <>
      <div className="container">
        <div className="row mt-5 pb-5">
          {detailsPets.map((item, index) => (
            <CardMascotas key={index} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Mascotas;
