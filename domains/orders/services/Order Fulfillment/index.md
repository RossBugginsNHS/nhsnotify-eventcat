---
id: Order Fulfillment
name: Order Fulfillment Service
version: 1.0.0
summary: >-
  This service handles the logistics and processing required to fulfill customer
  orders.
badges: []
sends:
  - id: fulfillmentrequested
    version: 1.0.0
  - id: ordershipped
    version: 1.0.0
  - id: orderdelivered
    version: 1.0.0
receives:
  - id: ordercreated
    version: 1.0.0
schemaPath: order-fulfillment-service.yml
specifications:
  asyncapiPath: order-fulfillment-service.yml
---
This service handles the logistics and processing required to fulfill customer orders.  

## Architecture diagram
<NodeGraph />
