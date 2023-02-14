from django.db import models


class AutomobileVO(models.Model):
    vin = models.CharField(max_length=17, unique=True)


class SalesPerson(models.Model):
    name = models.CharField(max_length=200)
    employee_number = models.PositiveIntegerField(unique=True)

    def __str__(self):
        return self.name

class Customer(models.Model):
    name = models.CharField(max_length=200)
    address = models.CharField(max_length=200)
    phone_number = models.PositiveBigIntegerField(null = True)

    def __str__(self):
        return self.name


class Sale(models.Model):
    sale_price = models.CharField(max_length=100)

    customer = models.ForeignKey(
        Customer,
        related_name = "sales",
        on_delete = models.CASCADE,
    )
# double check type of relationship
    automobile = models.ForeignKey(
        AutomobileVO,
        related_name = "sales",
        on_delete = models.CASCADE,
    )

    sales_person = models.ForeignKey(
        SalesPerson,
        related_name="sales",
        on_delete = models.CASCADE,
    )
