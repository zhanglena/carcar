from common.json import ModelEncoder

from .models import AutomobileVO, SalesPerson, Customer, Sale

class AutomobileVODetailEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "id",
        "vin",
    ]

class SalesPersonListEncoder(ModelEncoder):
    model = SalesPerson
    properties = [
        "id",
        "name",
        "employee_number",
    ]

class SalesPersonDetailEncoder(ModelEncoder):
    model = SalesPerson
    properties = [
        "id",
        "name",
        "employee_number",
    ]

class CustomerListEncoder(ModelEncoder):
    model = Customer
    properties = [
        "id",
        "name",
        "address",
        "phone_number",
    ]

class CustomerDetailEncoder(ModelEncoder):
    model = Customer
    properties = [
        "name",
        "address",
        "phone_number",
    ]

class SaleListEncoder(ModelEncoder):
    model = Sale
    properties = [
        "id",
        "sale_price",
        "customer",
        "automobile",
        "sales_person"
        ]
    encoders = {
        "customer": CustomerDetailEncoder(),
        "automobile": AutomobileVODetailEncoder(),
        "sales_person": SalesPersonDetailEncoder(),
    }

class SaleDetailEncoder(ModelEncoder):
    model = Sale
    properties = [
        "id",
        "sale_price",
        "customer",
        "automobile",
        "sales_person"
        ]
    encoders = {
        "customer": CustomerDetailEncoder(),
        "automobile": AutomobileVODetailEncoder(),
        "sales_person": SalesPersonDetailEncoder(),
    }
