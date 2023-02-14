import React from 'react';
import { Link } from 'react-router-dom';


class SalesPersonHistory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sales: [],
      sales_person: '',
      sales_persons: [],
    };

    this.handleChangeSalesPerson = this.handleChangeSalesPerson.bind(this);

  }
  async handleChangeSalesPerson(event){
    const value = event.target.value;
    this.setState({ sales_person: value });
}
  async componentDidMount() {
    const url = 'http://localhost:8090/api/sales/';

    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        this.setState({ sales: data.sales });

      }
      const saleurl = 'http://localhost:8090/api/salespersons/';
        const saleresponse = await fetch(saleurl);
        if (saleresponse.ok) {
            const data = await saleresponse.json();
            this.setState({ sales_persons: data.sales_persons });
        }
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    return (
      <div>
        <div className="dropdown">
          <select onChange={this.handleChangeSalesPerson} value={this.state.sales_person.id} required
            name="sales_person" id="sales_person" className="form-select">
            <option value="">Choose a Sales Person</option>
            {this.state.sales_persons.map((sales_person) => {
              return (
                <option key={sales_person.id} value={sales_person.id}>{sales_person.name}</option>
              )
            })}
          </select>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Sales Person Name</th>
              <th>Sales Person Employee Number</th>
              <th>Purchaser's Name</th>
              <th>Automobile VIN</th>
              <th>Sale Price</th>
            </tr>
          </thead>
          <tbody>
            {this.state.sales.filter(
              sale => sale.sales_person.id.toString() === this.state.sales_person).map((sale) => {
              return (
                <tr key={sale.id}>
                  <td>{sale.sales_person.name}</td>
                  <td>{sale.sales_person.employee_number}</td>
                  <td>{sale.customer.name}</td>
                  <td>{sale.automobile.vin}</td>
                  <td>{sale.sale_price}</td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="2">
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-left">
                  <Link
                    to="/sales/new"
                    className="btn btn-primary btn-sm px-4 gap-3"
                  >
                    Record a New Sale
                  </Link>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}

export default SalesPersonHistory
