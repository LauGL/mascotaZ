import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ContactScreen = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (this.email && this.password) {
      localStorage.setItem("user", JSON.stringify(this.email));
      navigate("/mascotas");
    } else {
      alert("Por favor, introduzca datos válidos.");
    }
  };

  return (
    <div className="container vh-100">
      <div className="row">
        <div className="col-12 col-md-6 offset-md-3 col-lg-4 offset-lg-4 bg-light p-3 rounded mt-5 ">
          <form onSubmit={handleSubmit}>
            <div className="mb-3 d-grid">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={formValues.email}
                onChange={handleChange}
                placeholder="ejemplo@ejemplo.com"
              />
            </div>
            <div className="mb-3 d-grid">
              <label>Contraseña</label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={formValues.password}
                onChange={handleChange}
                placeholder="Mínimo 8 caracteres"
                minLength="8"
                maxLength="12"
              />
            </div>
            <div className="mb-3 d-grid">
              <button className="btn btn-warning">
                <i className="fa fa-paw" aria-hidden="true"></i>
                <br />
                Accede para conocerlos
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactScreen;
