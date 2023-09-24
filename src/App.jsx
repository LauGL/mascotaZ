import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomeScreen from "./views/HomeScreen";
import ContactScreen from "./views/ContactScreen";
import Mascotas from "./views/Mascotas";
import ProtectedRoutes from "./routes/ProtectedRoutes";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeScreen />}></Route>
          <Route path="/contact" element={<ContactScreen />}></Route>
          <Route
            path="/mascotas"
            element={
              <ProtectedRoutes>
                <Mascotas />
              </ProtectedRoutes>
            }
          ></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
