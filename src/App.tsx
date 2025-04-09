import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import ModalShop from "./components/ModalShop";
import { useModalShop } from "./store/modal";
import TabsHome from "./components/TabsHome";
import Footer from "./components/Footer";
import HuinchaContratarPorTelefono from "./components/HuinchaContratarTelefono";
import PlanesHogar from "./components/hogar/PlanesHogarHome"; 
import PlanesMovil from "./components/movil/PlanesMovilesHome"; 

function App() {
  const ModalShopState = useModalShop((state) => state.open);
  return (
    <Router>
      <Header />  
      <ModalShop open={ModalShopState} />

      <Routes>
        <Route path="/" element={<TabsHome />} />
        <Route path="/planes-hogar" element={<PlanesHogar />} />
        <Route path="/planes-movil" element={<PlanesMovil />} />
      </Routes>
      <HuinchaContratarPorTelefono />
      <Footer />
    </Router>
  );
}

export default App;
