import React from 'react';
import { Link } from 'react-router-dom';


class CustomerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: [],
    };
  }
  async componentDidMount() {
    const url = 'http://localhost:8090/api/customers/';

    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        this.setState({ customers: data.customers });
      }
    } catch (e) {
      console.error(e);
    }
  }

  async delete(id, event) {
    event.preventDefault();
    const url = `http://localhost:8090/api/customers/${id}/`;
    const fetchConfig = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }

    await fetch(url, fetchConfig)
    const newCustomerList = this.state.customers.filter(customer => customer.if !== id)
    this.setState({ "customers": newCustomerList })
  }



  render() {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {this.state.customers.map((customer) => {
            return (
              <tr key={customer.id}>
                <td>{customer.name}</td>
                <td>{customer.address}</td>
                <td>{customer.phone_number}</td>
                <td><img style={{ width: 100 }} src={customer.picture_url} /></td>
                <td>
                  <form>
                    <button onClick={(event) => this.delete(customer.id, event)}>Delete</button>
                  </form>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="2">
              <div className="d-grid gap-2 d-sm-flex justify-content-sm-left">
                <Link
                  to="/customers/new"
                  className="btn btn-primary btn-sm px-4 gap-3"
                >
                  Add a New Potential Customer
                </Link>
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    );
  }
}

export default CustomerList
