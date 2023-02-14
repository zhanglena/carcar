import React from 'react';

class CustomerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      address: '',
      phone_number: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeAddress = this.handleChangeAddress.bind(this);
    this.handleChangePhoneNumber = this.handleChangePhoneNumber.bind(this);
  }


  async handleSubmit(event) {
    event.preventDefault();
    const data = {...this.state};
    delete data.manufacturers;

    const CustomerUrl = 'http://localhost:8090/api/customers/';
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await fetch(CustomerUrl, fetchConfig);
    if (response.ok) {
      const cleared= {
        name: '',
        address: '',
        phone_number: '',
      };
      this.setState(cleared);
    }
  }

  handleChangeName(event) {
    const value = event.target.value;
    this.setState({ name: value });
  }

  handleChangeAddress(event) {
    const value = event.target.value;
    this.setState({ address: value });
  }

  handleChangePhoneNumber(event) {
    const value = event.target.value;
    this.setState({ phone_number: value });
  }


  render() {
    return (
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Add a Potential Customer</h1>
            <form onSubmit={this.handleSubmit} id="create-Customer-form">
            <div className="form-floating mb-3">
                <input onChange={this.handleChangeName} value={this.state.name} placeholder="Name" required type="text" name="name" id="name" className="form-control" />
                <label htmlFor="style_name">Name</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={this.handleChangeAddress} value={this.state.address} placeholder="Address" required type="text" name="address" id="address" className="form-control" />
                <label htmlFor="style_name">Address</label>
                </div>
                <div className="form-floating mb-3">
                <input onChange={this.handleChangePhoneNumber} value={this.state.phone_number} placeholder="Phone Number" required type="integer" name="phone_number" id="phone_number" className="form-control" />
                <label htmlFor="style_name">Phone Number</label>
                </div>
                <button className="btn btn-primary">Add</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CustomerForm;
