import {Acasa} from "./components/acasa/Acasa";
import {Istorie} from "./components/istorie/Istorie";
import {Administrare} from "./components/administrare/Administrare";
import {Echipa} from "./components/echipa/Echipa";
import {Multimedia} from "./components/multimedia/Multimedia";
import {Login} from "./components/login/Login";
import {Meciuri} from "./components/meciuri/Meciuri";
import {Foto} from "./components/foto/Foto";
import {Stiri} from "./components/stiri/Stiri";
import {Navbar} from "./components/navbar/Navbar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Administrare />} />
          <Route path="/stiri" element={<Stiri />} />
          <Route path="/foto" element={<Foto />} />
          <Route path="/meciuri" element={<Meciuri />} />
          <Route path="/login" element={<Login />} />
          <Route path="/acasa" element={<Acasa />} />
          <Route path="/istorie" element={<Istorie />} />
          <Route path="/echipa" element={<Echipa />} />
          <Route path="/multimedia" element={<Multimedia />} />
          <Route path="/administrareechipa" element={<Administrare/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
