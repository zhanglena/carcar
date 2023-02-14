import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import Nav from "./Nav";
import ManufacturerList from "./ManufacturerList";
import ManufacturerForm from "./ManufacturerForm";
import AutomobileForm from "./AutomobileForm";
import AppointmentList from "./AppointmentList";
import TechnicianForm from "./TechnicianForm";
import AppointmentForm from "./AppointmentForm";
import SearchHistory from "./ServiceHistory";
import TechnicianList from "./TechnicianList";
import AutomobilesList from "./AutomobilesList";
import VehicleModelForm from "./VehicleModelForm";
import VehicleModelsList from "./VehicleModelsList";
import SalesPersonForm from "./SalesPersonForm";
import SalesPersonList from "./SalesPersonList";
import CustomerForm from "./CustomerForm";
import CustomerList from "./CustomerList";
import SalesRecordForm from "./SalesRecordForm";
import SalesRecordList from "./SalesRecordList";
import SalesPersonHistory from "./SalesPersonHistory";
import { Button } from "react-bootstrap";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="manufacturers/" element={<ManufacturerList />} />
          <Route path="manufacturers/new" element={<ManufacturerForm />} />
          <Route path="automobiles/new" element={<AutomobileForm />} />
          <Route path="appointments" element={<AppointmentList />} />
          <Route path="appointments/new" element={<AppointmentForm />} />
          <Route path="technicians/" element={<TechnicianList />} />
          <Route path="technicians/new" element={<TechnicianForm />} />
          <Route path="search/" element={<SearchHistory />} />
          <Route path="/automobiles/" element={<AutomobilesList />} />
          <Route path="/models/new/" element={<VehicleModelForm />} />
          <Route path="/models/" element={<VehicleModelsList />} />
          <Route path="/salespersons/new/" element={<SalesPersonForm />} />
          <Route path="/salespersons/" element={<SalesPersonList />} />
          <Route path="/customers/new/" element={<CustomerForm />} />
          <Route path="/customers/" element={<CustomerList />} />
          <Route path="/sales/new" element={<SalesRecordForm />} />
          <Route path="/sales/" element={<SalesRecordList />} />
          <Route path="/sales/search" element={<SalesPersonHistory />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
