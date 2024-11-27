import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import AuthProvider from "./logic/AuthProvider";
//import PrivateRoute from "./logic/PrivateRoute";

import Home from "./pages/homePage";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/DatenschutzErklärung";
import DataRemoveForm from "./pages/DataRemove";

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <div>
            <Routes>
              <Route path="/Impressum" element={<Impressum />} />
              <Route path="/Datenschutz" element={<Datenschutz />} />
              <Route path="/DatenEntfernen" element={<DataRemoveForm />} />
              <Route path="/home" element={<Home />} />
              <Route path="*" element={<Navigate to="/home" replace />} />
            </Routes>
          </div>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
