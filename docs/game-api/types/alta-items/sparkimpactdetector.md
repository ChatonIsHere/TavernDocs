---
title: "SparkImpactDetector"
description: "A CraftableImpactDetector that throws sparks when hit, with a chance to light nearby flammables that grows with hit effectiveness."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SparkImpactDetector

A **class** in `Root.Township`, `Alta.Impact`.

A `CraftableImpactDetector` that throws sparks when hit, with a chance to light nearby flammables that grows with hit effectiveness. Server only for the sparks.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`CraftableImpactDetector`](/game-api/types/alta-items/craftableimpactdetector)
- **Documented in** [Impacts and hit detection](/game-api/items/impacts)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SparkImpactDetector()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-maximumfirechance" /><code>{"private float maximumFireChance"}</code> | Fire chance for a fully effective hit. Default 0.5. |
| <Link id="m-minimumfirechance" /><code>{"private float minimumFireChance"}</code> | Fire chance for a hit with no effectiveness. Default 0.1. |
| <Link id="m-radius" /><code>{"private float radius"}</code> | Radius around the hit point that sparks reach. Default 0.1. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | Waits for the entity to finish initializing, then calls `AddSpark`. |

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addspark" /><code>{"private void AddSpark("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | Server: once the entity is initialized, subscribes `Spark` to the detector's `Hit` event. |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Editor: draws the spark radius. |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Editor: fills in the entity from the parents. |
| <Link id="m-spark" /><code>{"private void Spark("}<Link to="/game-api/types/alta-items/impacthit">{"ImpactHit"}</Link>{" hit)"}</code> | Calls `Fire.SimulateSparks` at the hit point with a chance lerped from min to max by hit effectiveness. |

</details>
