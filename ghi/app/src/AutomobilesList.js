import React from "react";
import { Link } from "react-router-dom";

class AutomobilesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      automobiles: [],
    };
  }
  async componentDidMount() {
    const url = "http://localhost:8100/api/automobiles/";

    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        this.setState({ automobiles: data.autos });
      }
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    return (
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>VIN</th>
              <th>Color</th>
              <th>Year</th>
              <th>Model</th>
              <th>Manufacturer</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.automobiles.map((automobile) => {
              return (
                <tr key={automobile.id}>
                  <td>{automobile.vin}</td>
                  <td>{automobile.color}</td>
                  <td>{automobile.year}</td>
                  <td>{automobile.model.name}</td>
                  <td>{automobile.model.manufacturer.name}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <Link
            to="/automobiles/new"
            className="btn btn-outline-primary btn-lg px-4 gap-3"
          >
            Add a New Automobile
          </Link>
        </div>
      </div>
    );
  }
}

export default AutomobilesList;
