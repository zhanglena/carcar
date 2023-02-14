import React from "react";
import { Link } from "react-router-dom";
class ManufacturerList extends React.Component {
  state = {
    manufacturers: [],
  };

  async getManufacturer() {
    const url = "http://localhost:8100/api/manufacturers/";
    const response = await fetch(url);
    try {
      if (response.ok) {
        const data = await response.json();
        const manufacturers = data.manufacturers;
        this.setState({
          manufacturers: manufacturers,
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
              <th>Manufacturer Name</th>
            </tr>
          </thead>
          <tbody>
            {this.state.manufacturers.map((manufacturer) => {
              return (
                <tr key={manufacturer.id}>
                  <td>{manufacturer.name}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <Link
            to="/manufacturers/new"
            className="btn btn-outline-primary btn-lg px-4 gap-3"
          >
            Add a New Manufacturer
          </Link>
        </div>
      </div>
    );
  }
}

export default ManufacturerList;
