from common.json import ModelEncoder
from .models import Technician, Appointment, AutomobileVO

class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "vin",
        "import_href"
    ]


class TechnicianEncoder(ModelEncoder):
    model = Technician
    properties = [
        "id",
        "name",
        "employee_number"
    ]

class AppointmentEncoder(ModelEncoder):
    model = Appointment
    properties = [
        "vin",
        "owner",
        "scheduled_time",
        "reason",
        "finished",
        "id",
        "technician"
    ]

    encoders={"technician": TechnicianEncoder()}
