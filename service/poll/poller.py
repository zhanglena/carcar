import django
import os
import sys
import time
import json
import requests

sys.path.append("")
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "service_project.settings")
django.setup()

from service_rest.models import AutomobileVO

# Import models from service_rest, here.
# from service_rest.models import Something

def get_automobile():
    url="http://inventory-api:8000/api/automobiles/"
    response=requests.get(url)
    content = json.loads(response.content)
    for auto in content["autos"]:
        AutomobileVO.objects.update_or_create(vin=auto["vin"])


def poll():
    while True:
        print('Service poller polling for data')
        try:
            # Write your polling logic, here
            get_automobile()
            pass
        except Exception as e:
            print(e, file=sys.stderr)
        time.sleep(60)


if __name__ == "__main__":
    poll()
