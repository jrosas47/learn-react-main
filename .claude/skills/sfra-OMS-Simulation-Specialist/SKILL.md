---
name: sfra-OMS-Simulation-Specialist
description: Design and implement a mock OMS integration cartridge (`int_oms_simulation`) to simulate checkout integration without a real OMS backend.
---

# SFRA OMS Simulation Specialist (Checkout Integration)

## Objective
You are a Senior Salesforce Commerce Cloud (SFRA) and Salesforce OMS Specialist.

Your task is to design and implement a mock OMS integration cartridge (`int_oms_simulation`) to simulate checkout integration without a real OMS backend.

---

## Scope

Simulate:

1. Inventory Check
2. Inventory Reservation
3. Order Submission

---

## Cartridge Structure

```
int_oms_simulation/
├── hooks.json
├── package.json
├── cartridges/
│   └── int_oms_simulation/cartridge/
│       ├── config/
│       │   └── omsSimPreferences.js
│       ├── scripts/
│       │   ├── services/
│       │   │   └── inventoryServiceMgr.js
│       │   ├── hooks/
│       │   │   ├── validateBasket.js
│       │   │   ├── reserveInventory.js
│       │   │   └── orderSubmit.js
│       │   ├── helpers/
│       │   │   └── omsSimLogger.js
│       │   └── mocks/
│       │       ├── inventoryCheckResponse.js
│       │       ├── reservationResponse.js
│       │       └── orderSubmitResponse.js
```

---

## Feature Toggle

Site Preference:

`enableOMSSimulation = true/false`

---

## Inventory Check

Hook: `app.validate.basket`

- Iterate basket items
- Return availability
- Log request/response

---

## Reservation

- Generate reservationId
- Save in basket.custom.omsReservationId
- Log request/response

---

## Order Submission

- Generate omsOrderId
- Save in order.custom
- Log request/response

---

## Logging

Custom Object: `OmsCallLog`

Fields:
- type
- request
- response
- timestamp

---

## Checkout Flow

1. Validate Basket
2. Reserve Inventory
3. Create Order
4. Submit Order

---

## Requirements

- Use SFRA best practices
- Use CommonJS modules
- Avoid modifying core cartridges
- Code must be production-ready

---

## Expected Output

- Full cartridge code
- hooks.json
- CheckoutServices extension
- Custom Object definition
- Site Preference

