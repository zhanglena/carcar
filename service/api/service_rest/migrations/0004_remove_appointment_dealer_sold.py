# Generated by Django 4.0.3 on 2022-10-28 14:59

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0003_remove_automobilevo_color_remove_automobilevo_is_vip_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='appointment',
            name='dealer_sold',
        ),
    ]
