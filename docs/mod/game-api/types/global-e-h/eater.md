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
| <Link id="m-ctor" /><code>{"Eater()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-consumptionmanager" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/consumptionmanager">{"ConsumptionManager"}</Link>{" consumptionManager"}</code> | The player's `ConsumptionManager`. |
| <Link id="m-currentedible" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/edibleobject">{"EdibleObject"}</Link>{" currentEdible"}</code> | Food being eaten. |
| <Link id="m-currentediblecollider" /><code>{"private Collider currentEdibleCollider"}</code> | Collider of the food being eaten. |
| <Link id="m-stopdelay" /><code>{"private float stopDelay"}</code> | Seconds after the food leaves before eating stops. Defaults to 0.2. |

</details>

## Methods

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-delaytostopeating" /><code>{"private IEnumerator DelayToStopEating() (iterator)"}</code> | Waits `stopDelay` seconds after the food leaves, then stops eating. |
| <Link id="m-finisheating" /><code>{"private void FinishEating("}<Link to="/mod/game-api/types/global-e-h/edibleobject">{"EdibleObject"}</Link>{" edible)"}</code> | Stops eating the food and reports an eating game task action for the player. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Stops eating if something is being eaten. |
| <Link id="m-ontriggerenter" /><code>{"private void OnTriggerEnter(Collider other)"}</code> | Starts eating the edible on the entering rigidbody's entity, if allowed. Re-entering cancels a pending stop. |
| <Link id="m-ontriggerexit" /><code>{"private void OnTriggerExit(Collider other)"}</code> | Starts the stop delay when the food being eaten leaves. |

</details>

## Used in

Members of other types that take, return or hold a `Eater`:

[`ConsumptionManager.eater`](/mod/game-api/types/global-c-d/consumptionmanager#m-eater).
