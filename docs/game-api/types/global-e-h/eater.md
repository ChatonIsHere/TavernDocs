---
title: "Eater"
description: "class Eater in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Eater

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Eater()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-consumptionmanager" /><code>{"private "}<Link to="/game-api/types/global-c-d/consumptionmanager">{"ConsumptionManager"}</Link>{" consumptionManager"}</code> |  |
| <Link id="m-currentedible" /><code>{"private "}<Link to="/game-api/types/global-e-h/edibleobject">{"EdibleObject"}</Link>{" currentEdible"}</code> |  |
| <Link id="m-currentediblecollider" /><code>{"private Collider currentEdibleCollider"}</code> |  |
| <Link id="m-stopdelay" /><code>{"private float stopDelay"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-delaytostopeating" /><code>{"private IEnumerator DelayToStopEating() (iterator)"}</code> |  |
| <Link id="m-finisheating" /><code>{"private void FinishEating("}<Link to="/game-api/types/global-e-h/edibleobject">{"EdibleObject"}</Link>{" edible)"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-ontriggerenter" /><code>{"private void OnTriggerEnter(Collider other)"}</code> |  |
| <Link id="m-ontriggerexit" /><code>{"private void OnTriggerExit(Collider other)"}</code> |  |

## Used in

Members of other types that take, return or hold a `Eater`:

[`ConsumptionManager.eater`](/game-api/types/global-c-d/consumptionmanager#m-eater).
