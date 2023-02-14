from django.urls import path
from .views import api_list_technicians, api_get_technician, api_get_automobileVO, api_list_appointments, api_get_appointment

urlpatterns=[
    path("technicians/", api_list_technicians, name="api_list_technician"),
    path("technicians/<int:pk>/", api_get_technician, name="api_get_technician"),
    path("appointments/", api_list_appointments, name="api_list_appointments"),
    path("appointments/<int:pk>/", api_get_appointment, name="api_get_appointment"),
    path("automobiles/", api_get_automobileVO, name="api_get_automobileVO")

]
