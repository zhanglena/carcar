import React from "react";

class SearchHistory extends React.Component {
  state = {
    vin: "",
    filteredAppointments: [],
    originalAppointments: [],
  };

  async componentDidMount(event) {
    const url = "http://localhost:8080/api/appointments/";
    const response = await fetch(url);
    try {
      if (response.ok) {
        const data = await response.json();
        const appoints = data.appointments;
        this.setState({
          filteredAppointments: appoints,
          originalAppointments: appoints,
        });
      }
    } catch (e) {
      console.error(e);
    }
  }

  onChangeFunction = (event) => {
    const value = event.target.value;

    if (value === "") {
      this.setState({ filteredAppointments: this.state.originalAppointments });
    }
    this.setState({ vin: value });
  };
  handleSubmit = (event) => {
    event.preventDefault();

    const filtered = this.state.originalAppointments.filter(
      (appt) => appt["vin"] === this.state.vin
    );

    this.setState({ filteredAppointments: filtered });
  };

  render() {
    return (
      <div className="container">
        <div className="input-group">
          <form
            onSubmit={(event) => this.handleSubmit(event)}
            id="search-bar"
            className="search-bar"
          >
            <input
              onChange={this.onChangeFunction}
              value={this.state.vin}
              placeholder="Enter VIN"
              name="vin"
              required
              type="search"
              id="search"
              className="form-control rounded"
            />
            <p></p>
            <button className="btn btn-outline-primary">Search</button>
          </form>
        </div>
        <table className="table table-striped ">
          <thead className="table-dark">
            <tr>
              <th>VIN</th>
              <th>Owner</th>
              <th>Scheduled Time</th>
              <th>Technician</th>
              <th>Reason</th>
            </tr>
          </thead>
          <tbody>
            {this.state.filteredAppointments.map((appointment) => {
              return (
                <tr key={appointment.id}>
                  <td>{appointment.vin}</td>
                  <td>{appointment.owner}</td>
                  <td>{appointment.scheduled_time}</td>
                  <td>{appointment.technician.name}</td>
                  <td>{appointment.reason}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default SearchHistory;
