# Generated by Django 4.0.3 on 2022-10-28 20:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sales_rest', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customer',
            name='phone_number',
            field=models.PositiveBigIntegerField(null=True),
        ),
        migrations.AlterField(
            model_name='salesperson',
            name='employee_number',
            field=models.PositiveIntegerField(unique=True),
        ),
    ]