# Generated by Django 4.0.5 on 2022-06-08 20:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('adoption', '0002_rename_petid_adoption_pet'),
    ]

    operations = [
        migrations.AlterField(
            model_name='adoption',
            name='value',
            field=models.DecimalField(decimal_places=2, max_digits=8),
        ),
    ]
