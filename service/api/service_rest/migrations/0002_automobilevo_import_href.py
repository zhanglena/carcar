# Generated by Django 4.0.3 on 2022-10-24 23:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='automobilevo',
            name='import_href',
            field=models.CharField(max_length=35, null=True),
        ),
    ]
