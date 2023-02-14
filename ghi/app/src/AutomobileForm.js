import React from "react";

class AutomobileForm extends React.Component {
  state = {
    color: "",
    year: "",
    vin: "",
    model_id: "",
    models: [],
  };

  handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const data = { ...this.state };
    delete data.models;
    const url = "http://localhost:8100/api/automobiles/";
    const fetchConfig = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(url, fetchConfig);
    if (response.ok) {
      const cleared = {
        color: "",
        year: "",
        vin: "",
        model_id: "",
      };
      this.setState(cleared);
    }
  };

  async componentDidMount() {
    const url = "http://localhost:8100/api/models/";

    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      this.setState({ models: data.models });
    }
  }

  render() {
    return (
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Create a Automobile </h1>
            <form onSubmit={this.handleSubmit} id="create-automobile-form">
              <div className="form-floating mb-3">
                <input
                  required
                  onChange={this.handleChange}
                  placeholder="color"
                  type="text"
                  name="color"
                  id="color"
                  className="form-control"
                  value={this.state.color}
                />
                <label htmlFor="name">Color</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  required
                  onChange={this.handleChange}
                  placeholder="year"
                  type="text"
                  name="year"
                  id="year"
                  className="form-control"
                  value={this.state.year}
                />
                <label htmlFor="name">Year</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  required
                  onChange={this.handleChange}
                  placeholder="vin"
                  type="text"
                  name="vin"
                  id="vin"
                  className="form-control"
                  value={this.state.vin}
                />
                <label htmlFor="name">VIN</label>
              </div>
              <div className="mb-3">
                <select
                  onChange={this.handleChange}
                  value={this.state.model_id}
                  required
                  name="model_id"
                  id="model_id"
                  className="form-select"
                >
                  <option value="">Choose a Model</option>
                  {this.state.models.map((model) => {
                    return (
                      <option key={model.id} value={model.id}>
                        {model.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AutomobileForm;
