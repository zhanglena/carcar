import React from "react";

class TechnicianForm extends React.Component {
  state = {
    name: "",
    employee_number: "",
  };

  handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const data = { ...this.state };
    const url = "http://localhost:8080/api/technicians/";
    const fetchConfig = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(url, fetchConfig);
    if (response.ok) {
      this.setState({
        name: "",
        employee_number: "",
      });
    }
  };
  render() {
    return (
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Create a new Technician</h1>
            <form onSubmit={this.handleSubmit} id="create-technician-form">
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
              <div className="form-floating mb-3">
                <input
                  required
                  onChange={this.handleChange}
                  placeholder="employee_number"
                  type="text"
                  name="employee_number"
                  id="employee_number"
                  className="form-control"
                  value={this.state.employee_number}
                />
                <label htmlFor="employee_number">Employee ID</label>
              </div>
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default TechnicianForm;
