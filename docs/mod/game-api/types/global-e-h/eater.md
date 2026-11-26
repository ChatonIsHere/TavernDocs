---
title: "Eater"
description: "Mouth trigger on a player: starts eating an EdibleObject that enters it and stops shortly after it leaves."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Eater

A **class** in `Root.Township`, the global namespace.

Mouth trigger on a player: starts eating an `EdibleObject` that enters it and stops shortly after it leaves.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Eater()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-consumptionmanager" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/consumptionmanager">{"ConsumptionManager"}</Link>{" consumptionManager"}</code> | <span className="api-desc">The player's `ConsumptionManager`.</span> |
| <Link id="m-currentedible" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/edibleobject">{"EdibleObject"}</Link>{" currentEdible"}</code> | <span className="api-desc">Food being eaten.</span> |
| <Link id="m-currentediblecollider" /><code>{"private Collider currentEdibleCollider"}</code> | <span className="api-desc">Collider of the food being eaten.</span> |
| <Link id="m-stopdelay" /><code>{"private float stopDelay"}</code> | <span className="api-desc">Seconds after the food leaves before eating stops. Defaults to 0.2.</span> |

</details>

## Methods

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-delaytostopeating" /><code>{"private IEnumerator DelayToStopEating() (iterator)"}</code> | <span className="api-desc">Waits `stopDelay` seconds after the food leaves, then stops eating.</span> |
| <Link id="m-finisheating" /><code>{"private void FinishEating("}<Link to="/mod/game-api/types/global-e-h/edibleobject">{"EdibleObject"}</Link>{" edible)"}</code> | <span className="api-desc">Stops eating the food and reports an eating game task action for the player.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Stops eating if something is being eaten.</span> |
| <Link id="m-ontriggerenter" /><code>{"private void OnTriggerEnter(Collider other)"}</code> | <span className="api-desc">Starts eating the edible on the entering rigidbody's entity, if allowed. Re-entering cancels a pending stop.</span> |
| <Link id="m-ontriggerexit" /><code>{"private void OnTriggerExit(Collider other)"}</code> | <span className="api-desc">Starts the stop delay when the food being eaten leaves.</span> |

</details>

## Used in

Members of other types that take, return or hold a `Eater`:

<div className="api-used-in">

[`ConsumptionManager.eater`](/mod/game-api/types/global-c-d/consumptionmanager#m-eater).

</div>
