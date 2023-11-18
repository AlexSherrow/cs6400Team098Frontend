import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { HomePage } from './layouts/HomePage/HomePage';
import { UserControlPanel } from './layouts/HomePage/Components/UserControlPanel';
import { VehicleControlPanel } from './layouts/HomePage/Components/VehicleControlPanel';


function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
      <Route index element={<HomePage />} />
      <Route path="User" element={<UserControlPanel/>} />
      <Route path="Vehicle" element={<VehicleControlPanel/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
