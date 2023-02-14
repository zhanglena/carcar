from django.urls import path

from .views import api_list_salespersons, api_show_salesperson, api_list_sales, api_show_sale, api_list_customers, api_show_customer


urlpatterns = [
    path("salespersons/", api_list_salespersons, name="api_list_salespersons"),
    path("salespersons/<int:pk>/", api_show_salesperson, name="api_show_salesperson"),
    path("sales/", api_list_sales, name="api_list_sales"),
    path("sales/<int:pk>", api_show_sale, name="api_show_sale"),
    path("customers/", api_list_customers, name="api_list_customers"),
    path("customers/<int:pk>/", api_show_customer, name="api_show_customer"),

]
