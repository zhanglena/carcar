import React from 'react';

class SalesPersonForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      employee_number: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeEmployeeNumber = this.handleChangeEmployeeNumber.bind(this);
  }


  async handleSubmit(event) {
    event.preventDefault();
    const data = {...this.state};
    delete data.manufacturers;

    const SalesPersonUrl = 'http://localhost:8090/api/salespersons/';
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await fetch(SalesPersonUrl, fetchConfig);
    if (response.ok) {
      const cleared= {
        name: '',
        employee_number: '',
      };
      this.setState(cleared);
    }
  }

  handleChangeName(event) {
    const value = event.target.value;
    this.setState({ name: value });
  }

  handleChangeEmployeeNumber(event) {
    const value = event.target.value;
    this.setState({ employee_number: value });
  }


  render() {
    return (
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Add a new Sales Person</h1>
            <form onSubmit={this.handleSubmit} id="create-salesperson-form">
            <div className="form-floating mb-3">
                <input onChange={this.handleChangeName} value={this.state.name} placeholder="Name" required type="text" name="name" id="name" className="form-control" />
                <label htmlFor="style_name">Name</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={this.handleChangeEmployeeNumber} value={this.state.employee_number} placeholder="Employee Number" required type="text" name="employee_number" id="employee_number" className="form-control" />
                <label htmlFor="style_name">Employee Number</label>
                </div>
                <button className="btn btn-primary">Add</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SalesPersonForm;
