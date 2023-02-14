import React from "react";

class ManufacturerForm extends React.Component {
  state = {
    name: "",
  };

  handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const data = { ...this.state };
    const url = "http://localhost:8100/api/manufacturers/";
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
        name: "",
      };
      this.setState(cleared);
    }
  };

  render() {
    return (
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Create a new Manufacturer</h1>
            <form onSubmit={this.handleSubmit} id="create-manufacturer-form">
              <div className="form-floating mb-3">
                <input
                  required
                  onChange={this.handleChange}
                  placeholder="name"
                  type="text"
                  name="name"
                  id="name"
                  className="form-control"
                  value={this.state.name}
                />
                <label htmlFor="name">Name</label>
              </div>
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ManufacturerForm;
