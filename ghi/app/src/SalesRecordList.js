import React from 'react';
import { Link } from 'react-router-dom';


class SalesRecordList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sales: [],
      sales_person: '',
      sales_persons: [],
    };

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
            {this.state.sales.map((sale) => {
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
                    to="/sales/search"
                    className="btn btn-primary btn-sm px-4 gap-3"
                  >
                    Search by Employee
                  </Link>
                </div>
              </td>
            </tr>
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
    );
  }
}

export default SalesRecordList
