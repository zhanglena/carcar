import React from "react";

class VehicleModelForm extends React.Component {
  state = {
    name: "",
    manufacturer_id: "",
    manufacturers: [],
    picture_url: "",
  };

  handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({ [name]: value });
  };

  async componentDidMount() {
    const url = "http://localhost:8100/api/manufacturers/";
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      this.setState({ manufacturers: data.manufacturers });
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const data = { ...this.state };
    delete data.manufacturers;

    const modelUrl = "http://localhost:8100/api/models/";
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(modelUrl, fetchConfig);
    if (response.ok) {
      this.setState({
        name: "",
        manufacturer_id: "",
        picture_url: "",
      });
    }
  };

  render() {
    return (
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Add a Vehicle Model</h1>
            <form onSubmit={this.handleSubmit} id="create-model-form">
              <div className="form-floating mb-3">
                <input
                  onChange={this.handleChange}
                  placeholder="Name"
                  required
                  type="text"
                  name="name"
                  id="name"
                  className="form-control"
                  value={this.state.name}
                />
                <label htmlFor="style_name">Name</label>
              </div>
              <div className="mb-3">
                <select
                  onChange={this.handleChange}
                  value={this.state.manufacturer_id}
                  required
                  name="manufacturer_id"
                  id="manufacturer_id"
                  className="form-select"
                >
                  <option value="">Choose a manufacturer</option>
                  {this.state.manufacturers.map((manufacturer) => {
                    return (
                      <option key={manufacturer.id} value={manufacturer.id}>
                        {manufacturer.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="form-floating mb-3">
                <input
                  onChange={this.handleChange}
                  placeholder="Picture"
                  required
                  type="url"
                  name="picture_url"
                  id="picture_url"
                  className="form-control"
                  value={this.state.picture_url}
                />
                <label htmlFor="picture_url">Picture Link</label>
              </div>
              <button className="btn btn-primary">Add</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default VehicleModelForm;
