from django.db import models

# Create your models here.

class Technician(models.Model):
    name = models.CharField(max_length=100)
    employee_number = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name

class Appointment(models.Model):
    vin = models.CharField(max_length=50)
    owner = models.CharField(max_length=150)
    scheduled_time = models.DateTimeField()
    technician = models.ForeignKey(Technician, related_name="technician", on_delete=models.PROTECT)
    reason = models.TextField()
    finished = models.BooleanField(default=False)
    def __str__(self):
        return f"{self.owner}'s checkup for {self.reason}"


class AutomobileVO(models.Model):
    vin = models.CharField(max_length=50, unique=True)
    import_href=models.CharField(max_length=35, null=True)

    def __str__(self):
        return f"{self.vin}"
