import React from 'react';

class SalesRecordForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            automobile: '',
            autos: [],
            sales_person: '',
            sales_persons: [],
            customer: '',
            customers: [],
            sale_price: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeAutomobile = this.handleChangeAutomobile.bind(this);
        this.handleChangeSalesPerson = this.handleChangeSalesPerson.bind(this);
        this.handleChangeCustomer = this.handleChangeCustomer.bind(this);
        this.handleChangeSalesPrice = this.handleChangeSalesPrice.bind(this);
    }

    async componentDidMount() {
        const url = 'http://localhost:8100/api/automobiles/';
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            this.setState({ autos: data.autos });
        }
        const saleurl = 'http://localhost:8090/api/salespersons/';
        const saleresponse = await fetch(saleurl);
        if (saleresponse.ok) {
            const data = await saleresponse.json();
            this.setState({ sales_persons: data.sales_persons });
        }
        const customerurl = 'http://localhost:8090/api/customers/';
        const customerresponse = await fetch(customerurl);
        if (customerresponse.ok) {
            const data = await customerresponse.json();
            this.setState({ customers: data.customers });
        }

    }

    async handleSubmit(event) {
        event.preventDefault();
        const data = { ...this.state };
        delete data.autos;
        delete data.sales_persons;
        delete data.customers;

        const SaleUrl = 'http://localhost:8090/api/sales/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const response = await fetch(SaleUrl, fetchConfig);
        if (response.ok) {
            const cleared = {
                automobile: '',
                sales_person: '',
                customer: '',
                sale_price: '',
            };
            this.setState(cleared);
        }
    }

    handleChangeAutomobile(event) {
        const value = event.target.value;
        this.setState({ automobile: value });
    }

    handleChangeSalesPerson(event) {
        const value = event.target.value;
        this.setState({ sales_person: value });
    }

    handleChangeCustomer(event) {
        const value = event.target.value;
        this.setState({ customer: value });
    }

    handleChangeSalesPrice(event) {
        const value = event.target.value;
        this.setState({ sale_price: value });
    }

    render() {
        return (
            <div className="row">
                <div className="offset-3 col-6">
                    <div className="shadow p-4 mt-4">
                        <h1>Record a Sale</h1>
                        <form onSubmit={this.handleSubmit} id="create-model-form">
                            <div className="mb-3">
                                <select onChange={this.handleChangeAutomobile} value={this.state.automobile} required
                                    name="automobile" id="automobile" className="form-select">
                                    <option value="">Choose an Automobile</option>
                                    {this.state.autos.map((automobile) => {
                                        return (
                                            <option key={automobile.vin} value={automobile.vin}>{automobile.vin}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className="mb-3">
                                <select onChange={this.handleChangeSalesPerson} value={this.state.sales_person} required
                                    name="sales_person" id="sales_person" className="form-select">
                                    <option value="">Choose a Sales Person</option>
                                    {this.state.sales_persons.map((sales_person) => {
                                        return (
                                            <option key={sales_person.id} value={sales_person.id}>{sales_person.name}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className="mb-3">
                                <select onChange={this.handleChangeCustomer} value={this.state.customer} required
                                    name="customer" id="customer" className="form-select">
                                    <option value="">Choose a Customer</option>
                                    {this.state.customers.map((customer) => {
                                        return (
                                            <option key={customer.id} value={customer.id}>{customer.name}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={this.handleChangeSalesPrice} value={this.state.sale_price} placeholder="Name" required type="integer" name="sale_price" id="sale_price" className="form-control" />
                                <label htmlFor="style_name">Sale Price</label>
                            </div>
                            <button className="btn btn-primary">Add</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default SalesRecordForm;
