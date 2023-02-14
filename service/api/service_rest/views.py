from .models import Technician, Appointment, AutomobileVO
from django.views.decorators.http import require_http_methods
import json
from django.http import JsonResponse
from sqlite3 import IntegrityError
from .encoders import TechnicianEncoder, AppointmentEncoder, AutomobileVOEncoder

@require_http_methods(["GET", "POST"])
def api_list_technicians(request):
    if request.method == "GET":
        technicians = Technician.objects.all()
        return JsonResponse(
            {"technicians": technicians},
            encoder=TechnicianEncoder
        )
    else:
        try:
            content = json.loads(request.body)
            technician = Technician.objects.create(**content)
            return JsonResponse(
                technician,
                encoder=TechnicianEncoder,
                safe=False,
            )
        except IntegrityError:
            return JsonResponse(
                {"message": "Technician ID already exists"},
                status=400,
            )

@require_http_methods(["GET", "DELETE"])
def api_get_technician(request, pk):
    if request.method == "GET":
        technician = Technician.objects.get(id=pk)
        return JsonResponse(
            technician,
            encoder=TechnicianEncoder,
            safe=False,
        )
    else:
        count, _ = Technician.objects.filter(id=pk).delete()
        return JsonResponse({"deleted": count > 0})

@require_http_methods(["GET", "POST"])
def api_list_appointments(request):
    if request.method == "GET":
        appointments = Appointment.objects.all()
        return JsonResponse(
            {"appointments": appointments},
            encoder=AppointmentEncoder,
        )
    else:
        content = json.loads(request.body)
        if "technician" in content:
            try:
                technician = Technician.objects.get(id=content["technician"])
                content["technician"] = technician
            except Technician.DoesNotExist:
                return JsonResponse(
                    {"message": "Technician does not exist"},
                    status=400,
                )
        appointment = Appointment.objects.create(**content)
        return JsonResponse(
            appointment,
            encoder=AppointmentEncoder,
            safe=False,
        )

@require_http_methods(["GET", "PUT", "DELETE"])
def api_get_appointment(request, pk):
    if request.method == "GET":
        appointment = Appointment.objects.get(id=pk)
        return JsonResponse(
            appointment,
            encoder=AppointmentEncoder,
            safe=False,
        )
    elif request.method == "PUT":
        Appointment.objects.filter(id=pk).update(finished=True)
        appointment = Appointment.objects.get(id=pk)
        return JsonResponse(
            appointment,
            encoder=AppointmentEncoder,
            safe=False,
        )
    else:
        count, _ = Appointment.objects.filter(id=pk).delete()
        return JsonResponse({"deleted": count > 0})

@require_http_methods(["GET", "DELETE"])
def api_get_automobileVO(request):
    if request.method == "GET":
        automobile = AutomobileVO.objects.all()
        return JsonResponse(
            {"automobile": automobile},
            encoder=AutomobileVOEncoder,
        )
    else:
        count, _ = AutomobileVO.objects.all().delete()
        return JsonResponse(
            {"deleted": count > 0},
        )
