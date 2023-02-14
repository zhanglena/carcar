import { NavLink } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          CarCar
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Inventory
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="/manufacturers/">
                  Manufacturer List
                </Dropdown.Item>
                <Dropdown.Item href="/models/">Models List</Dropdown.Item>
                <Dropdown.Item href="/automobiles/">
                  Automobiles List
                </Dropdown.Item>
                <Dropdown.Item href="/manufacturers/new">
                  Create New Manufacturer
                </Dropdown.Item>
                <Dropdown.Item href="/models/new">
                  Create New Model
                </Dropdown.Item>
                <Dropdown.Item href="/automobiles/new">
                  Create New Automobile
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Services
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="/technicians/">
                  Technician List
                </Dropdown.Item>
                <Dropdown.Item href="/appointments/">
                  Appointments List
                </Dropdown.Item>
                <Dropdown.Item href="/search/">Search History</Dropdown.Item>
                <Dropdown.Item href="/technicians/new">
                  Create New Technician
                </Dropdown.Item>
                <Dropdown.Item href="/appointments/new">
                  Create New Appointment
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Sales
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="/salespersons/">
                  Sales Person List
                </Dropdown.Item>
                <Dropdown.Item href="/customers/">
                  Potential Customers List
                </Dropdown.Item>
                <Dropdown.Item href="/sales/">Sales Records</Dropdown.Item>
                <Dropdown.Item href="/sales/search">
                  Search Sales by Employee
                </Dropdown.Item>
                <Dropdown.Item href="/salespersons/new">
                  Create a New Sales Person
                </Dropdown.Item>
                <Dropdown.Item href="/customers/new">
                  Create a New Potential Customer
                </Dropdown.Item>
                <Dropdown.Item href="/sales/new">
                  Record A New Sale
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
