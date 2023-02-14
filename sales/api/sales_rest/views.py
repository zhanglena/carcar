#from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json

from .encoders import (
    AutomobileVODetailEncoder,
    SalesPersonListEncoder,
    SalesPersonDetailEncoder,
    CustomerListEncoder,
    CustomerDetailEncoder,
    SaleListEncoder,
    SaleDetailEncoder,
)

from .models import AutomobileVO, SalesPerson, Customer, Sale


@require_http_methods(["GET", "POST"])
def api_list_salespersons(request):
    if request.method == "GET":
        sales_persons = SalesPerson.objects.all()
        return JsonResponse(
            {"sales_persons": sales_persons},
            encoder=SalesPersonListEncoder,
        )
    else:
        content = json.loads(request.body)

        sales_person = SalesPerson.objects.create(**content)
        return JsonResponse(
            sales_person,
            encoder=SalesPersonDetailEncoder,
            safe=False,
        )


@require_http_methods(["GET", "DELETE"])
def api_show_salesperson(request, pk):
    if request.method == "GET":
        sales_person = SalesPerson.objects.get(id=pk)
        return JsonResponse(
            sales_person,
            encoder=SalesPersonDetailEncoder,
            safe=False,
        )
    else:
        count, _ = SalesPerson.objects.filter(id=pk).delete()
        return JsonResponse({"deleted": count > 0})


@require_http_methods(["GET", "POST"])
def api_list_sales(request):
    if request.method == "GET":
        sales = Sale.objects.all()
        return JsonResponse(
            {"sales": sales},
            encoder=SaleListEncoder,
        )
    else:
        content = json.loads(request.body)

        try:
            automobile = AutomobileVO.objects.get(vin=content["automobile"])
            content["automobile"] = automobile
        except AutomobileVO.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid automobile id"},
                status=400,
            )
        try:
            salesperson = SalesPerson.objects.get(id=content["sales_person"])
            content["sales_person"] = salesperson
        except SalesPerson.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid salesperson id"},
                status=400,
            )
        try:
            customer = Customer.objects.get(id=content["customer"])
            content["customer"] = customer
        except Customer.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid customer id"},
                status=400,
            )

        sale = Sale.objects.create(**content)
        return JsonResponse(
            sale,
            encoder=SaleDetailEncoder,
            safe=False,
        )


@require_http_methods(["GET", "DELETE"])
def api_show_sale(request, pk):
    if request.method == "GET":
        sale = Sale.objects.get(id=pk)
        return JsonResponse(
            sale,
            encoder=SaleDetailEncoder,
            safe=False,
        )
    else:
        count, _ = Sale.objects.filter(id=pk).delete()
        return JsonResponse({"deleted": count > 0})


@require_http_methods(["GET", "POST"])
def api_list_customers(request):
    if request.method == "GET":
        customers = Customer.objects.all()
        return JsonResponse(
            {"customers": customers},
            encoder=CustomerListEncoder,
        )
    else:
        content = json.loads(request.body)

        customer = Customer.objects.create(**content)
        return JsonResponse(
            customer,
            encoder=CustomerDetailEncoder,
            safe=False,
        )

@require_http_methods(["GET", "DELETE"])
def api_show_customer(request, pk):
    if request.method == "GET":
        customer = Customer.objects.get(id=pk)
        return JsonResponse(
            customer,
            encoder=CustomerDetailEncoder,
            safe=False,
        )
    else:
        count, _ = Customer.objects.filter(id=pk).delete()
        return JsonResponse({"deleted": count > 0})
