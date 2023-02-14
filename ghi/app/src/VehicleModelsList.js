import React from "react";
import { Link } from "react-router-dom";

class VehicleModelsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      models: [],
    };
  }
  async componentDidMount() {
    const url = "http://localhost:8100/api/models/";

    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        this.setState({ models: data.models });
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
              <th>Name</th>
              <th>Manufacturer</th>
              <th>Picture</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.models.map((model) => {
              return (
                <tr key={model.id}>
                  <td>{model.name}</td>
                  <td>{model.manufacturer.name}</td>
                  <td>
                    <img style={{ width: 100 }} src={model.picture_url} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <Link
            to="/models/new"
            className="btn btn-outline-primary btn-lg px-4 gap-3"
          >
            Add a New Vehicle Model
          </Link>
        </div>
      </div>
    );
  }
}

export default VehicleModelsList;
