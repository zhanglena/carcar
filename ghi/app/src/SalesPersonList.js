import React from 'react';
import { Link } from 'react-router-dom';


class SalesPersonList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sales_persons: [],
    };
  }
  async componentDidMount() {
    const url = 'http://localhost:8090/api/salespersons/';

    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        this.setState({ sales_persons: data.sales_persons });
      }
    } catch (e) {
      console.error(e);
    }
  }

  async delete(id, event) {
    event.preventDefault();
    const url = `http://localhost:8090/api/salespersons/${id}/`;
    const fetchConfig = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }

    await fetch(url, fetchConfig)
    const newSalesPersonList = this.state.sales_persons.filter(sales_person => sales_person.if !== id)
    this.setState({ "sales_persons": newSalesPersonList })
  }


  render() {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Employee Number</th>
          </tr>
        </thead>
        <tbody>
          {this.state.sales_persons.map((salesperson) => {
            return (
              <tr key={salesperson.id}>
                <td>{salesperson.name}</td>
                <td>{salesperson.employee_number}</td>
                <td>
                  <form>
                    <button onClick={(event) => this.delete(salesperson.id, event)}>Delete</button>
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
                  to="/salespersons/new"
                  className="btn btn-primary btn-sm px-4 gap-3"
                >
                  Add a New Sales Person
                </Link>
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    );
  }
}

export default SalesPersonList
