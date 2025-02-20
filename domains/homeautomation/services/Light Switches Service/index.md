---
id: Light Switches Service
name: Streetlights Kafka API
version: 1.0.0
summary: ''
badges: []
sends:
  - id: turnon
    version: 1.0.0
  - id: dimlight
    version: 1.0.0
receives:
  - id: lightmeasured
    version: 1.0.0
schemaPath: producer01.yaml
specifications:
  asyncapiPath: producer01.yaml
---
The Smartylighting Streetlights API allows you to remotely manage the city
lights.
### Check out its awesome features:

* Turn a specific streetlight on/off 🌃  
* Dim a specific streetlight 😎
* Receive real-time information about environmental lighting conditions 📈  

## Architecture diagram
<NodeGraph />
