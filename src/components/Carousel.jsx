import imagen1 from "../assets/mascotas1.jpg";
import imagen2 from "../assets/mascotas2.jpg";
import "../css/carousel.css";
import { NavLink } from "react-router-dom";

const Carousel = () => {
  return (
    <div id="carouselExampleFade" className="carousel slide carousel-fade">
      <div className="carousel-inner container-carousel">
        <div className="carousel-item active">
          <img src={imagen1} className="d-block w-100" alt="imagen animales" />
        </div>
        <div className="carousel-item">
          <img src={imagen2} className="d-block w-100" alt="imagen animales" />
        </div>
        <div className="overlay">
          <div className="h-100 d-flex flex-column align-content-center justify-content-center text-white p-3">
            <h3 className="text-center">Tu mejor amigo te está esperando</h3>
            <NavLink
              className="btn btn-warning h-20 d-flex justify-content-center align-content-center"
              to="/contact"
            >
              Conócelo
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
