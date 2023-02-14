import React from "react";

class AppointmentForm extends React.Component {
  state = {
    vin: "",
    owner: "",
    scheduled_time: "",
    reason: "",
    technicians: [],
    technician: "",
  };

  handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({ [name]: value });
  };

  async componentDidMount() {
    const url = "http://localhost:8080/api/technicians/";
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      this.setState({ technicians: data.technicians });
    }
  }
  handleSubmit = async (event) => {
    event.preventDefault();
    const data = { ...this.state };
    delete data.technicians;
    const url = "http://localhost:8080/api/appointments/";
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
        vin: "",
        owner: "",
        scheduled_time: "",
        reason: "",
        technician: "",
      });
    }
  };

  render() {
    return (
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Create a Appointment </h1>
            <form onSubmit={this.handleSubmit} id="create-appointment-form">
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
                <label htmlFor="vin">Vin</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  required
                  onChange={this.handleChange}
                  placeholder="owner"
                  type="text"
                  name="owner"
                  id="owner"
                  className="form-control"
                  value={this.state.owner}
                />
                <label htmlFor="owner">Owner</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  required
                  onChange={this.handleChange}
                  placeholder="scheduled_time"
                  type="datetime-local"
                  name="scheduled_time"
                  id="scheduled_time"
                  className="form-control"
                  value={this.state.scheduled_time}
                />
                <label htmlFor="scheduled_time">Scheduled Time</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  required
                  onChange={this.handleChange}
                  placeholder="reason"
                  type="text"
                  name="reason"
                  id="reason"
                  className="form-control"
                  value={this.state.reason}
                />
                <label htmlFor="reason">Reason</label>
              </div>
              <div className="mb-3">
                <select
                  onChange={this.handleChange}
                  value={this.state.technician}
                  required
                  name="technician"
                  id="technician"
                  className="form-select"
                >
                  <option value="">Choose a Technician</option>
                  {this.state.technicians.map((technician) => {
                    return (
                      <option key={technician.id} value={technician.id}>
                        {technician.name}
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

export default AppointmentForm;
