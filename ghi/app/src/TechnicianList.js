import React from "react";
import { Link } from "react-router-dom";
class TechnicianList extends React.Component {
  state = {
    technicians: [],
  };

  async getManufacturer() {
    const url = "http://localhost:8080/api/technicians/";
    const response = await fetch(url);
    try {
      if (response.ok) {
        const data = await response.json();
        const technicians = data.technicians;
        this.setState({
          technicians: technicians,
        });
      }
    } catch (e) {
      console.error(e);
    }
  }
  async componentDidMount() {
    this.getManufacturer();
  }
  render() {
    return (
      <div>
        <table className="table table-striped ">
          <thead className="table-dark">
            <tr>
              <th>Technicians List</th>
              <th>Employee #</th>
            </tr>
          </thead>
          <tbody>
            {this.state.technicians.map((technician) => {
              return (
                <tr key={technician.id}>
                  <td>{technician.name}</td>
                  <td>{technician.employee_number}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <Link
            to="/technicians/new"
            className="btn btn-outline-primary btn-lg px-2 gap-1"
          >
            Add A New Technician
          </Link>
        </div>
      </div>
    );
  }
}

export default TechnicianList;
