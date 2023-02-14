# CarCar

Team:

- Lena - Service Microservice
- Cara - Sales microservice

## Design

## Service microservice

For the service inventory, the models were created with a automobileVO to poll over the automobiles from the inventory using a poller. The urls and views were made as the backend api end-points that were used to make api calls for the service appointment data. On the react front end, service technicians and appointments list are seen and new ones can be created. Vin numbers from the appointments are compared to those in the automobile inventory to determine VIP status. Appointments can be also "cancelled" and deleted or "finished" and remain in the service history. For the service history, services can be found through vin search.

## Sales microservice

For the Sales microservice, I created models for Sales Persons, Customers, Sales and a AutomobileVO to poll the automobiles that are in inventory to be sold. The Sales model included foreign keys to the Sales Persons, Customers, and AutomobileVO to record a sale included the different data groups.
